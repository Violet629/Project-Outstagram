<template>
  <div class="myinfo">
    <div>
      <div class="myinfo-menu1">
        <img
          class="my-profile-img"
          src="https://placeimg.com/100/100/arch"
          alt="my-profile-img"
        />
      </div>
      <div class="myinfo-menu2">
        <p class="my-profile-name">{{ userdata[0].userID }}</p>
        <img
          class="myinfo-logout"
          src="../assets/icon/logout.png"
          alt="logout"
        />
      </div>
      <div class="myinfo-menu3">
        <div class="menu3-my-post">
          <p>post</p>
          <p>0</p>
        </div>
        <div class="menu3-my-follower">
          <p>follower</p>
          <p>0</p>
        </div>
        <div class="menu3-my-follow">
          <p style="op">follow</p>
          <p>0</p>
        </div>
      </div>
    </div>
    <div class="up-post">
      <button>+</button>
    </div>
    <div class="my-post">
      <h3>My Post</h3>
      <div class="my-post-list" v-for="mypostData in 3" :key="mypostData">
        <img src="https://placeimg.com/500/500/arch" alt="post-img" />
        <p class="my-post-list-time">xx hour</p>
        <div class="my-post-list-comment">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
            deserunt.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Myinfo",
  data() {
    return {
      userdata: [],
    };
  },
  mounted() {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap");
/* Roboto font 400&700 : font-family: 'Roboto', sans-serif; */

.myinfo {
  width: 100%;
  max-width: 36%;
  float: right;
  position: relative;
  top: -100px;
}
.myinfo-menu1 {
  width: 30%;
  padding: 12px;
  float: left;
}
.my-profile-img {
  width: 100%;
  border-radius: 50%;
}
.myinfo-menu2 {
  width: 57%;
  height: 55px;
  padding: 10px;
  float: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.my-profile-name {
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  font-weight: 700;
}
.myinfo-logout {
  width: 30px;
  opacity: 0.4;
}
.myinfo-menu3 {
  width: 57%;
  height: 55px;
  padding: 10px;
  float: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  text-align: center;
}
.up-post {
  width: 100%;
  float: left;
  margin-top: 18px;
  border: 2px solid rgb(233, 233, 233);
  border-radius: 8px;
}
.up-post button {
  width: 100%;
  font-size: 36px;
  opacity: 0.8;
  border: 0;
}
.my-post {
  width: 100%;
  margin-top: 4px;
  float: left;
  border: 2px solid rgb(233, 233, 233);
  border-radius: 8px;
}
.my-post h3 {
  margin: 12px;
  color: gray;
  opacity: 0.5;
  font-family: "Roboto", sans-serif;
}
.my-post-list {
  margin: 24px;
  float: left;
}
.my-post-list img {
  width: 64px;
  float: left;
}
.my-post-list-time {
  width: 80%;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  margin: 6px 12px 0px 12px;
  float: left;
}
.my-post-list-comment {
  width: 50%;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  margin: 8px 12px 0px 12px;
  white-space: nowrap;
  overflow: hidden;
  float: left;
  opacity: 0.5;
}
.my-post-list-comment p {
  width: 100%;
  margin: 0;
}
</style>
