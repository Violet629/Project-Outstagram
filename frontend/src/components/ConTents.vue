<template>
  <div class="contents-list">
    <div class="contents" v-for="contentsData in 4" :key="contentsData">
      <div class="profile">
        <img src="https://placeimg.com/100/100/arch" alt="profile-img" />
        <p class="profile-name">name</p>
        <p class="contents-time">xx hour</p>
      </div>
      <div class="contents-img">
        <img src="https://placeimg.com/500/500/arch" alt="contents-img" />
      </div>
      <div class="contents-post">
        <p class="post-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
          nesciunt.
        </p>
        <br />
        <img class="post-like" src="../assets/icon/heart.png" alt="like" />
      </div>
      <div class="post-comment">
        <input type="text" placeholder="댓글을 달아주세요" />
        <button class="comment-send">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap");
/* Roboto font 400&700 : font-family: 'Roboto', sans-serif; */

.contents-list {
  width: 100%;
  max-width: 60%;
  float: left;
  margin-top: 22px;
}
.contents {
  width: 100%;
  border: 2px solid rgb(233, 233, 233);
  margin-bottom: 22px;
  border-radius: 8px;
}
.profile {
  display: flex;
  align-items: center;
}
.profile img {
  width: 40px;
  border-radius: 50%;
  margin: 12px;
}
.profile-name {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 700;
}
.contents-time {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  opacity: 0.5;
  margin-left: 12px;
}
.contents-img {
  width: 100%;
  height: 500px;
  overflow: hidden;
}
.contents-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.contents-post {
  width: 100%;
  margin-left: 16px;
}
.post-text {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
}
.post-like {
  width: 26px;
  margin-bottom: 8px;
}
.post-comment {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid rgb(233, 233, 233);
}
.post-comment input {
  width: 88%;
  padding: 16px;
  border: 0;
}
.comment-send {
  width: 10%;
  font-size: 16px;
  color: blue;
  background-color: #fff;
  border: 0;
}
</style>
