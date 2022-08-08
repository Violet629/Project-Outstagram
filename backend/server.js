const express = require("express");
const path = require("path");
const app = express();

// node와 서버간 ajax 요청 기능 추가
app.use(express.json());
var cors = require("cors");
app.use(cors());

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

app.get("/test", function (req, res) {
  res.json({ name: "test" });
});

// 주소창에 미개발 주소 치면 다시 메인 페이지로 보내주세요
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});
