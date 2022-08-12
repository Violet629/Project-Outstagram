const express = require("express");
const path = require("path");
const app = express();

// node와 서버간 ajax 요청 기능 추가
app.use(express.json());
var cors = require("cors");
app.use(cors());

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

// 메인 페이지
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.post("/signup", function (req, res) {
  db.collection("userdata").insertone(
    { userID: req.body.id, userPW: req.body.pw },
    function (err, r) {
      res.redirect("/");
    }
  );
});

// app.get("/test", function (req, res) {
//   res.json({ name: "test" });
// });

app.get("/user", function (req, res) {
  db.collection("post")
    .find()
    .toArray(function (에러, 결과) {
      res.json(결과);
      for (var i = 0; i < 결과.length; i++) {
        console.log(결과[i].name);
      }
    });
});

app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/fail" }),
  function (요청, 응답) {
    응답.redirect("/");
  }
);

passport.use(
  new LocalStrategy(
    {
      usernameField: "id",
      passwordField: "pw",
      session: true,
      passReqToCallback: false,
    },
    function (입력한아이디, 입력한비번, done) {
      console.log(입력한아이디, 입력한비번);
      db.collection("login").findOne(
        { id: 입력한아이디 },
        function (에러, 결과) {
          if (에러) return done(에러);

          if (!결과)
            return done(null, false, { message: "존재하지않는 아이디요" });
          if (입력한비번 == 결과.pw) {
            return done(null, 결과);
          } else {
            return done(null, false, { message: "비번틀렸어요" });
          }
        }
      );
    }
  )
);

// 주소창에 미개발 주소 치면 다시 메인 페이지로 보내주세요
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});
