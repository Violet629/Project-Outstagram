<template>
  <div class="main-page">
    <NavBar />
    <FriendList />
    <MyInfo />
    <ConTents />
    <FriendInfo v-if="this.$store.state.friendModal == true" />
  </div>
</template>

<script>
import FriendList from "./FriendList.vue";
import ConTents from "./ConTents.vue";
import MyInfo from "./MyInfo.vue";
import NavBar from "./NavBar.vue";
import FriendInfo from "./FriendInfo.vue";

export default {
  name: "MainPage",
  components: {
    FriendList,
    ConTents,
    MyInfo,
    NavBar,
    FriendInfo,
  },
  // data request
  mounted() {
    axios
      .get("userdata")
      .then((res) => {
        this.$store.state.userData = res.data[0];
      })
      .catch((err) => {
        console.error(err.message);
      });
    axios
      .get("postdata")
      .then((res) => {
        this.$store.state.postData = res.data.slice(0, 3);
      })
      .catch((err) => {
        console.error(err.message);
      });
    axios
      .get("mypostdata")
      .then((res) => {
        this.$store.state.myPostData = res.data;
      })
      .catch((err) => {
        console.error(err.message);
      });
  },
};
</script>

<style>
.main-page {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
