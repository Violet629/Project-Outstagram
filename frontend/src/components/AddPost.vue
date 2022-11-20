<template>
  <div class="addpost">
    <NavBar />
    <NewPost />
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import NewPost from "./NewPost.vue";

export default {
  name: "AddPost",
  components: {
    NavBar,
    NewPost,
  },
  created() {
    axios
      .get("userdata")
      .then((res) => {
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
