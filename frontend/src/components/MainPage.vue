<template>
  <div class="main-page">
    <FriendList />
    <ConTents />
    <MyInfo />
  </div>
</template>

<script>
import FriendList from "./FriendList.vue";
import ConTents from "./ConTents.vue";
import MyInfo from "./MyInfo.vue";

export default {
  name: "MainPage",
  components: {
    FriendList,
    ConTents,
    MyInfo,
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
