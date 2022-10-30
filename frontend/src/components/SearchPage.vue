<template>
  <div class="searchpage">
    <NavBar />
    <PostSearch />
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import PostSearch from "./PostSearch.vue";

export default {
  components: {
    NavBar,
    PostSearch,
  },
};
</script>

<style>
.searchpage {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
