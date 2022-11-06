<template>
  <div class="myinfo">
    <div>
      <div class="myinfo-menu1">
        <img
          class="my-profile-img"
          :src="$store.state.userData.profileImg"
          alt="my-profile-img"
        />
      </div>
      <div class="myinfo-menu2">
        <p class="my-profile-name">{{ $store.state.userData.userID }}</p>
      </div>
      <div class="myinfo-menu3">
        <div class="menu3-my-post">
          <p>Post</p>
          <p>{{ $store.state.userData.post.length }}</p>
        </div>
        <div class="menu3-my-like">
          <p>Like Post</p>
          <p>{{ $store.state.userData.like.length }}</p>
        </div>
        <div class="menu3-my-follower">
          <p>follower</p>
          <p>{{ $store.state.userData.follower.length }}</p>
        </div>
      </div>
    </div>
    <div class="up-post">
      <router-link to="add_post">
        <button>+</button>
      </router-link>
    </div>
    <div class="my-post">
      <h3>My Post</h3>
      <div
        class="my-post-list"
        v-for="mypostData in $store.state.myPostData"
        :key="mypostData"
      >
        <img
          :src="mypostData.postimg"
          alt="post-img"
          class="filter-item"
          :class="mypostData.filter"
        />
        <div class="my-post-text">
          <div class="my-post-list-time">
            <p>
              {{ mypostData.timestamp }}
            </p>
          </div>
          <div class="my-post-list-comment">
            <p>
              {{ mypostData.postfeed }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Myinfo",
  data() {
    return {};
  },
};
</script>

<style>
.myinfo {
  width: 100%;
  max-width: 36%;
  float: right;
  margin-top: 32px;
  box-sizing: border-box;
  border: 1px solid rgba(153, 153, 153, 0.3);
  background-color: #fff;
  border-radius: 12px;
}
.myinfo-menu1 {
  width: 30%;
  padding: 12px;
  float: left;
  text-align: center;
}
.my-profile-img {
  width: 100%;
  height: 140px;
  /* object-fit: cover; */
  border-radius: 50%;
  border: 1px solid rgba(153, 153, 153, 0.3);
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
  text-align: center;
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
  margin-top: 8px;
  border: 1px solid rgba(153, 153, 153, 0.3);
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
  height: 350px;
  overflow: scroll;
  overflow-x: hidden;
  margin-top: 4px;
  float: left;
  /* border-top: 1px solid rgba(153, 153, 153, 0.3); */
}
.my-post::-webkit-scrollbar {
  width: 10px;
}
.my-post::-webkit-scrollbar-thumb {
  background-color: #2f3542;
  border-radius: 10px;
  background-clip: padding-box;
  border: 2px solid transparent;
}
.my-post::-webkit-scrollbar-track {
  background-color: rgba(153, 153, 153, 0.3);
  border-radius: 10px;
  box-shadow: inset 0px 0px 5px white;
  display: none;
}
.my-post h3 {
  margin: 18px;
  color: gray;
  opacity: 0.5;
  font-family: "Roboto", sans-serif;
  border-bottom: 2px solid rgba(153, 153, 153, 0.3);
}
.my-post-list {
  margin: 0px 4px 28px 16px;
  /* width: 100%; */
  /* float: left; */
  display: inline-block;
}
.my-post-list img {
  width: 64px;
  height: 64px;
  float: left;
  border-radius: 12px;
}
.my-post-text {
  display: flex;
  flex-direction: column;
}
.my-post-list-time p {
  /* width: 80%; */
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  margin: 6px 12px 0px 12px;
  float: left;
  opacity: 0.5;
}
.my-post-list-comment {
  /* width: 50%; */
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  margin: 8px 12px 0px 12px;
  white-space: nowrap;
  overflow: hidden;
  float: left;
  opacity: 0.7;
}
.my-post-list-comment p {
  width: 100%;
  margin: 0;
}
/* PC (해상도 1024px)*/
@media all and (min-width: 1024px) {
}
/* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
@media all and (min-width: 768px) and (max-width: 1023px) {
  .myinfo {
    display: none;
  }
}
/* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
@media all and (max-width: 767px) {
  .myinfo {
    display: none;
  }
}
</style>
