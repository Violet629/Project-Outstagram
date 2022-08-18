<template>
  <div>
    <!-- <LoginPage v-if="this.$store.state.loginPage === false" /> -->
    <!-- <SignupPage v-if="this.$store.state.loginPage === true" /> -->
    <router-view />
  </div>
</template>

<script>
import LoginPage from "../src/components/LoginPage.vue";
import SignupPage from "../src/components/SignupPage.vue";
// import axios from "axios";

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
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
/* logo font : font-family: 'Kaushan Script', cursive; */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap");
/* Roboto font 400&700 : font-family: 'Roboto', sans-serif; */

body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
