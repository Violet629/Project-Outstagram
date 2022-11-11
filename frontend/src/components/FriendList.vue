<template>
  <div class="friend-list">
    <div class="friend-header">Follow</div>
    <div class="friend-icon">
      <div
        class="friend-img"
        v-for="myfollow in $store.state.myFollowData"
        :key="myfollow"
      >
        <img
          @click="followPost(myfollow.userID)"
          class="icon-img animate__animated animate__bounceIn"
          :src="myfollow.profileImg"
          alt="friend-img"
        />
        <p class="icon-name">{{ myfollow.userID }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FriendList",
  data() {
    return {};
  },
  created() {
    axios
      .get("myfollowdata")
      .then((res) => {
        // console.log(res.data);
        this.$store.state.myFollowData = res.data;
      })
      .catch((err) => {
        console.error(err.message);
      });
  },
  methods: {
    followPost(name) {
      axios
        .post("followPost", {
          followName: name,
        })
        .then((res) => {
          this.$store.state.postData = res.data;
        })
        .catch(function (err) {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.friend-list {
  width: 100%;
  max-width: 60%;
  float: left;
  margin-top: 24px;
  border: solid 1px rgba(153, 153, 153, 0.2);
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
}
.friend-header {
  margin: 8px 0px 0px 12px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
}
.friend-icon {
  display: flex;
}
.friend-img {
  width: 60px;
  margin: 6px 0px 6px 22px;
  transition: all 0.05s linear;
}
.friend-img:hover {
  transform: scale(1.1);
}
.icon-img {
  border: 2px solid transparent;
  border-radius: 50%;
  background-origin: border-box;
  background-clip: content-box, border-box;
  width: 100%;
  height: 60px;
}
.add-img {
  width: 100%;
  opacity: 0.3;
}
.icon-name {
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  text-align: center;
  margin: 2px;
}
/* PC (해상도 1024px)*/
@media all and (min-width: 1024px) {
}

/* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
@media all and (min-width: 768px) and (max-width: 1023px) {
  .friend-list {
    max-width: 90%;
    float: none;
    margin: 24px auto 24px auto;
  }
}

/* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
@media all and (max-width: 767px) {
  .friend-list {
    max-width: 100%;
    float: none;
    margin: 12px auto 12px auto;
    border-left: none;
    border-right: none;
  }
}
</style>
