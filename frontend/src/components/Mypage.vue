<template>
  <div class="mypage">
    <NavBar />
    <MyProfile />
    <MyContents />
    <EditProfile v-if="this.$store.state.editModal == true" />
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import MyProfile from "./MyProfile.vue";
import MyContents from "./MyContents.vue";
import EditProfile from "./EditProfile.vue";

export default {
  name: "Mypage",
  components: {
    NavBar,
    MyProfile,
    MyContents,
    EditProfile,
  },
  created() {
    // data request
    axios
      .get("userdata")
      .then((res) => {
        this.$store.state.userData = res.data[0];
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
    axios
      .get("mylikedata")
      .then((res) => {
        this.$store.state.myLikeData = res.data;
      })
      .catch((err) => {
        console.error(err.message);
      });
  },
};
</script>

<style>
.mypage {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
