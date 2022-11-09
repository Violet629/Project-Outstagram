<template>
  <div class="messenger">
    <div class="messenger-follow-list">
      <div class="messenger-follow-list-header">Follow</div>
      <div
        class="messenger-follow-list-icon"
        v-for="myfollow in $store.state.myFollowData"
        :key="myfollow"
      >
        <img :src="myfollow.profileImg" alt="friend-img" class="icon-img" />
        <p class="icon-name">{{ myfollow.userID }}</p>
      </div>
    </div>
    <div class="chatting">
      <div class="message"></div>
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
  width: 100%;
}
.messenger-follow-list {
  width: 20%;
  float: left;
}
.messenger-chatting {
  width: 79%;
  float: left;
}
</style>
