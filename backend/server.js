const express = require("express");
const path = require("path");
const app = express();

// node와 서버간 ajax 요청 기능 추가
app.use(express.json());
var cors = require("cors");
app.use(cors());

// db에 저장은 가능하나 null로 출력되는 현상 & post 요청 오류 현상 고쳐줌
app.use(express.urlencoded({ extended: true }));

// 로그인 기능 라이브러리
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

app.post("/signup", function (req, res) {
  db.collection("useraccount").insertOne(
    { userID: req.body.login_id, userPW: req.body.login_pw },
    function (err, result) {
      console.log(req.body);
      console.log(req.body.login_id + " User-Sign UP!");
    }
  );
  res.redirect("/singup_complete");
});

app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/fail" }),
  function (req, res) {
    res.redirect("/home");
  }
);

app.get("/home", loginCheck, function (req, res, next) {
  console.log(req.user);
  next();
});

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
      db.collection("useraccount").findOne(
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
  db.collection("useraccount").findOne(
    { userID: user },
    function (err, result) {
      done(null, user);
    }
  );
});

function loginCheck(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.redirect("/login_request");
  }
}

// 주소창에 미개발 주소 치면 다시 메인 페이지로 보내주세요
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// app.get("/user", function (req, res) {
//   db.collection("post")
//     .find()
//     .toArray(function (err, result) {
//       res.json(result);
//       for (var i = 0; i < 결과.length; i++) {
//         console.log(결과[i].name);
//       }
//     });
// });
