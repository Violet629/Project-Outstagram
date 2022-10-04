const express = require("express");
const path = require("path");
const app = express();

// node와 서버간 ajax 요청 기능 추가
app.use(express.json());
var cors = require("cors");
app.use(cors());

// db에 저장은 가능하나 null로 출력되는 현상 & post 요청 오류 현상 고쳐줌
app.use(express.urlencoded({ extended: true }));

// passport : 로그인 기능 라이브러리
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");

app.use(session({ secret: "4649", resave: true, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// mongodb 세팅
const MongoClient = require("mongodb").MongoClient;

var db;
MongoClient.connect(
  "mongodb+srv://violet4649:soda4649@cluster0.dymf56j.mongodb.net/Outstagram?retryWrites=true&w=majority",
  function (err, client) {
    if (err) return console.log(err);

    db = client.db("Outstagram");

    app.listen("8080", function () {
      console.log("listening on 8080");
    });
  }
);

// 다른 로컬파일 불러오기
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// 시작 페이지
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// passport 회원가입 라이브러리
passport.use(
  new LocalStrategy(
    {
      usernameField: "id",
      passwordField: "pw",
      session: true,
      passReqToCallback: false,
    },
    function (inputId, inputPw, done) {
      console.log(inputId, inputPw);
      db.collection("userdata").findOne(
        { userID: inputId },
        function (err, result) {
          if (err) return done(err);
          if (!result) return done(null, false, { message: "Incorrect ID" });
          if (inputPw == result.userPW) {
            return done(null, result);
          } else {
            return done(null, false, { message: "Incorrect password." });
          }
        }
      );
    }
  )
);
passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  db.collection("userdata").findOne({ userID: user }, function (err, result) {
    done(null, user);
  });
});

// 로그인 안되어있으면 로그인 요청 창으로 이동
function loginCheck(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.redirect("/login_request");
  }
}

// 로그인요청을 passport 처리후 성공하면 /home 으로 보내주세요
// 실패하면 /fail로 보내주세요
app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/fail" }),
  function (req, res) {
    res.redirect("/home");
  }
);

app.post("/logout", function (req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
    console.log("User-logout");
  });
});

app.post("/signup", function (req, res) {
  db.collection("userdata").insertOne(
    {
      userID: req.body.login_id,
      userPW: req.body.login_pw,
      profileImg:
        "https://project-outstagram.s3.ap-northeast-2.amazonaws.com/profile-img/Default.png",
      profileComment: "Hello!",
      friend: [],
      post: [],
      like: [],
    },
    function (err, result) {
      console.log(req.body);
      console.log(req.body.login_id + " User-Sign UP!");
    }
  );
  res.redirect("/singup_complete");
});

// 로그인하지 않고 밑에 경로로  바로 들어가는걸 방지 해주세요
app.get("/home", loginCheck, function (req, res, next) {
  // console.log(req.user._id);
  next();
});

app.get("/mypage", loginCheck, function (req, res, next) {
  next();
});

app.get("/add_post", loginCheck, function (req, res, next) {
  next();
});

app.get("/userdata", function (req, res) {
  // console.log("UserData");
  db.collection("userdata")
    .find({ userID: req.user.userID })
    .toArray(function (err, data) {
      res.json(data);
      // for (var i = 0; i < data.length; i++) {
      //   console.log(data[i]);
      // }
    });
});

app.get("/postdata", function (req, res) {
  // console.log("PostData");
  db.collection("post")
    .find()
    .sort({ timestamp: -1 })
    .toArray(function (err, data) {
      res.json(data);
      console.log(data);
      // for (var i = 0; i < data.length; i++) {
      //   console.log(data[i]);
      // }
    });
});

// 이미지를 AWS S3에 저장하기
const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
aws.config.loadFromPath(__dirname + "/config/s3.json");
// 키는 json파일로 저장해놓음 보안상 config,s3.json는 깃허브에는 올라가지 않음

const s3 = new aws.S3();
const profileimg_upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "project-outstagram/profile-img",
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      cb(null, `^_${Date.now()}_${file.originalname}`);
    },
  }),
});

const postimg_upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "project-outstagram/post-img",
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      cb(null, `^_${Date.now()}_${file.originalname}`);
    },
  }),
});

app.post(
  "/editprofile-img",
  profileimg_upload.single("image"),
  function (req, res) {
    console.log(req.body);

    // 수정전 사진은 S3 버킷에서 삭제 해주세요
    // s3.deleteObject(
    //   { Bucket: "project-outstagram/profile-img", Key: req.body.beforeUrl },
    //   (err, data) => {
    //     console.error(err);
    //     console.log(data);
    //   }
    // );

    // 수정한 사진은 DB에 주소만 저장해주세요
    db.collection("userdata").updateOne(
      { userID: req.body.userID },
      {
        $set: {
          profileImg: req.file.location,
        },
      },
      function () {
        console.log("수정완료");
        res.redirect("/mypage");
      }
    );
  }
);

app.post("/editprofile-comment", function (req, res) {
  db.collection("userdata").updateOne(
    { userID: req.body.userID },
    {
      $set: {
        profileComment: req.body.comment,
      },
    },
    function () {
      console.log("수정완료");
      res.redirect("/mypage");
    }
  );
});

app.post("/newpost", postimg_upload.single("image"), function (req, res) {
  console.log(req.body);

  var today = new Date();
  var month = today.getUTCMonth() + 1; //months from 1-12
  var day = today.getUTCDate();
  var year = today.getUTCFullYear();
  var hours = today.getHours();
  var minutes = today.getMinutes();

  today = year + "/" + month + "/" + day + " " + hours + ":" + minutes;

  var tagList = req.body.newPostTag;
  var tagSplit = tagList.split("#");

  db.collection("post").insertOne({
    userID: req.body.userID,
    profileimg: req.body.profileimg,
    filter: req.body.filterName,
    postimg: req.file.location,
    postcomment: req.body.newPostComment,
    posttag: tagSplit,
    comment: [],
    like: 0,
    liked: [],
    timestamp: today,
  });
  res.redirect("/add_post");
});

// 주소창에 미개발 주소 치면 다시 메인 페이지로 보내주세요
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});
