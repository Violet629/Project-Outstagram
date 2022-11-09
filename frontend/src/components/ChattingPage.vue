<template>
  <div class="chatting-page">
    <NavBar />
    <Messenger />
  </div>
</template>

<script>
import Messenger from "./Messenger.vue";
import NavBar from "./NavBar.vue";

export default {
  data() {
    return {};
  },
  components: {
    NavBar,
    Messenger,
  },
};
</script>

<style>
.chatting-page {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
