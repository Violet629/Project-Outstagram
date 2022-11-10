<template>
  <div class="messenger">
    <div class="messenger-follow-list">
      <div class="messenger-follow-list-header">
        <p>Follow</p>
        <img src="../assets/icon/chat.png" alt="icon" />
      </div>
      <div class="messenger-follow-list-icon" v-for="test in 4" :key="test">
        <img
          src="https://project-outstagram.s3.ap-northeast-2.amazonaws.com/post-img/placeholder.png"
          alt="friend-img"
          class="icon-img"
        />
        <p class="icon-name">test</p>
      </div>
    </div>
    <div class="chatting">
      <div class="message" v-for="index in 4" :key="index">test</div>
      <div class="chatting-send">
        <input type="text" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  methods: {},
};
</script>

<style>
.messenger {
  background-color: #fff;
  width: 85%;
  height: 800px;
  margin: 0 auto;
  border-radius: 12px;
  border: 1px solid rgba(153, 153, 153, 0.3);
}
.messenger-follow-list {
  width: 30%;
  height: 100%;
  float: left;
  border-right: 1px solid rgba(153, 153, 153, 0.3);
  background-color: #fff;
}
.messenger-chatting {
  width: 70%;
  float: left;
}
.messenger-follow-list-header {
  display: flex;
  border-bottom: 1px solid rgba(153, 153, 153, 0.3);
  align-items: center;
  justify-content: center;
}
.messenger-follow-list-header p {
  margin: 18px 0px;
  font-size: 32px;
  font-weight: 700;
}
.messenger-follow-list-header img {
  width: 35px;
  height: 35px;
  margin-left: 6px;
}
.messenger-follow-list-icon {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.messenger-follow-list-icon img {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin: 12px 12px 12px 20px;
}
.messenger-follow-list-icon p {
  font-size: 20px;
  margin-top: 16px;
}
.chatting-send {
  width: 100%;
}
.chatting-send input {
  width: 100%;
}
</style>
