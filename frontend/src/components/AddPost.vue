<template>
  <div class="addpost">
    <NavBar />
    <NewPost />
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import NewPost from "./NewPost.vue";
import axios from "axios";

export default {
  components: {
    NavBar,
    NewPost,
  },
  // 로딩 했을때 유저데이터 요청
  created() {
    axios
      .get("http://localhost:8080/userdata")
      .then((res) => {
        // console.log(res.data[0]);
        this.$store.state.userData = res.data[0];
      })
      .catch((err) => {
        console.error(err.message);
      });
  },
};
</script>

<style>
.addpost {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
