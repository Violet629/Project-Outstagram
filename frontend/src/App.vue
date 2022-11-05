<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import LoginPage from "../src/components/LoginPage.vue";
import SignupPage from "../src/components/SignupPage.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    LoginPage,
    SignupPage,
  },
};
</script>

<style>
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: rgba(245, 245, 245, 0.7);
}
</style>
