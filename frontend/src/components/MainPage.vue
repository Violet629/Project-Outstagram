<template>
  <div class="main-page">
    <FriendList />
  </div>
</template>

<script>
import FriendList from "./FriendList.vue";
export default {
  name: "MainPage",
  components: {
    FriendList,
  },
};
</script>

<style>
.main-page {
  width: 100%;
  max-width: 1200px;
  margin: auto;
}
</style>
