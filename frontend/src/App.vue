<template>
  <div>
    <!-- <div class="login-page" v-if="singupStep === false">
      <div class="welcome">
        <div class="welcome-icon">
          <img src="./assets/icon/paperairplane.png" />
        </div>
        <div class="welcome-text">
          <span>Welcome To </span>
          <span style="font-family: 'Kaushan Script', cursive">Outstagram</span>
        </div>
      </div>
      <div class="login-input">
        <input type="text" class="login-id" placeholder="ID" />
        <br />
        <input type="password" class="login-pw" placeholder="Password" />
      </div>
      <div>
        <button class="login-signin">Sign In</button>
        <br />
        <button class="login-signup" @click="signupStep">Sign Up</button>
      </div>
    </div>
    <div class="signup-page" v-if="singupStep === true">
      <div>
        <div class="header">
          <div class="header-icon">
            <img src="./assets/icon/profile.png" />
          </div>
          <span class="header-text">Sign Up</span>
        </div>
        <div>
          <input type="text" class="signup-id" placeholder="New ID" />
        </div>
        <div>
          <input type="password" class="signup-pw" placeholder="New Password" />
        </div>
        <div>
          <input
            type="password"
            class="signup-pw"
            placeholder="Re-Enter Password"
          />
        </div>
        <div>
          <button class="signup-submit">submit</button>
        </div>
      </div>
    </div> -->
    <LoginPage v-if="this.$store.state.singupStep === false" />
    <SignupPage v-if="this.$store.state.singupStep === true" />
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
/* .login-page,
.signup-page {
  width: 100%;
  max-width: 480px;
  padding: 48px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  border: 1px solid rgba(153, 153, 153, 0.568);
  border-radius: 8px;
  text-align: center;
  box-shadow: 20px 20px 20px grey;
}
.welcome-icon img,
.header-icon img {
  width: 46px;
  margin-bottom: 14px;
}
.welcome-text,
.header-text {
  font-family: "Roboto", sans-serif;
  font-size: 28px;
  margin-bottom: 24px;
}
.login-id,
.login-pw,
.signup-id,
.signup-pw {
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  padding: 16px 128px 16px 12px;
  margin: 12px 12px 0px 12px;
  border-radius: 8px;
  border: 1px solid rgba(153, 153, 153, 0.322);
}
.login-signin,
.login-signup,
.signup-submit {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  margin: 12px 12px 0px 12px;
  border-radius: 8px;
  border: 1px solid rgba(153, 153, 153, 0.322);
}
.login-signin,
.signup-submit {
  padding: 10px 180px 10px 180px;
}
.login-signup {
  padding: 10px 176px 10px 176px;
} */
</style>
