<template>
  <div class="login-page">
    <div class="welcome">
      <div class="welcome-icon">
        <img src="../assets/icon/paperairplane.png" />
      </div>
      <div class="welcome-text">
        <span>Welcome To </span>
        <span style="font-family: 'Kaushan Script', cursive">Outstagram</span>
      </div>
    </div>
    <form action="/login" method="post">
      <div class="login-input">
        <input type="text" class="login-id" placeholder="ID" name="id" />
        <br />
        <input
          type="password"
          class="login-pw"
          placeholder="Password"
          name="pw"
        />
      </div>
      <div>
        <!-- <router-link to="/" class="login-signin">Sign In</router-link> -->
        <button type="submit" class="login-signin">Sign In</button>
        <br />
        <router-link to="singup-page" class="login-signup">Sing up</router-link>
        <!-- <button class="login-signup" @click="$store.commit('loginStep')">
        Sign Up
      </button> -->
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
/* logo font : font-family: 'Kaushan Script', cursive; */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap");
/* Roboto font 400&700 : font-family: 'Roboto', sans-serif; */

.login-page,
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
.login-pw {
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  padding: 16px 128px 16px 12px;
  margin: 12px 12px 0px 12px;
  border-radius: 8px;
  border: 1px solid rgba(153, 153, 153, 0.322);
}
.login-signin,
.login-signup {
  font-family: "Roboto", sans-serif;
  display: inline-block;
  font-size: 18px;
  margin: 12px 12px 0px 12px;
  border-radius: 8px;
  border: 1px solid rgba(153, 153, 153, 0.322);
  list-style: none;
  text-decoration: none;
  color: black;
}
.login-signin {
  padding: 10px 180px 10px 180px;
}
.login-signup {
  padding: 10px 176px 10px 176px;
}
</style>
