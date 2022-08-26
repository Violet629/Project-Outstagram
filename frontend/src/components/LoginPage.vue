<template>
  <div class="login-page">
    <div class="pc-login-page">
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
          <input
            type="text"
            class="login-id"
            placeholder="ID"
            autocomplete="off"
            name="id"
          />
          <br />
          <input
            type="password"
            class="login-pw"
            placeholder="Password"
            name="pw"
          />
        </div>
        <div>
          <button type="submit" class="login-signin">Login</button>
          <br />
          <router-link to="singup_page" class="login-signup"
            >Sing up</router-link
          >
        </div>
      </form>
    </div>
    <div class="mobile-login-page">
      <div class="mobile-welcome">
        <div class="mobile-welcome-icon">
          <img src="../assets/icon/paperairplane.png" />
        </div>
        <div class="mobile-welcome-text">
          <span>Welcome To </span>
          <span style="font-family: 'Kaushan Script', cursive">Outstagram</span>
        </div>
      </div>
      <form action="/login" method="post">
        <div class="mobile-login-input">
          <input
            type="text"
            class="mobile-login-id"
            placeholder="ID"
            autocomplete="off"
            name="id"
          />
          <br />
          <input
            type="password"
            class="mobile-login-pw"
            placeholder="Password"
            name="pw"
          />
        </div>
        <div>
          <button type="submit" class="mobile-login-signin">Login</button>
          <br />
          <router-link to="singup_page" class="mobile-login-signup"
            >Sing up</router-link
          >
        </div>
      </form>
    </div>
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

.pc-login-page {
  width: 100%;
  max-width: 480px;
  padding: 48px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  border: 1px solid rgba(153, 153, 153, 0.8);
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
  border: 1px solid rgba(153, 153, 153, 0.8);
}
.login-signin,
.login-signup {
  font-family: "Roboto", sans-serif;
  display: inline-block;
  font-size: 18px;
  margin: 12px 12px 0px 12px;
  border-radius: 8px;
  border: 1px solid rgba(153, 153, 153, 0.8);
  list-style: none;
  text-decoration: none;
  color: black;
}
.login-signin {
  padding: 10px 185px 10px 185px;
}
.login-signup {
  padding: 10px 176px 10px 176px;
}
.mobile-login-page {
  width: 100%;
  text-align: center;
  margin: 30% auto;
}
.mobile-welcome-icon img {
  width: 80px;
  margin: 24px;
}
.mobile-welcome-text {
  font-family: "Roboto", sans-serif;
  font-size: 48px;
  margin-bottom: 18px;
}
.mobile-login-id,
.mobile-login-pw {
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  padding: 16px 48px 16px 12px;
  border-radius: 8px;
  border: 1px solid rgba(153, 153, 153, 0.8);
  margin-bottom: 8px;
}
.mobile-login-signin,
.mobile-login-signup {
  font-family: "Roboto", sans-serif;
  display: inline-block;
  font-size: 18px;
  margin: 8px 12px 0px 12px;
  border-radius: 8px;
  border: 1px solid rgba(153, 153, 153, 0.8);
  list-style: none;
  text-decoration: none;
  color: black;
}
.mobile-login-signin {
  padding: 10px 144px 10px 144px;
}
.mobile-login-signup {
  padding: 10px 136px 10px 136px;
}
/* PC (해상도 1024px)*/
@media all and (min-width: 1024px) {
  .mobile-login-page {
    display: none;
  }
}

/* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
@media all and (min-width: 768px) and (max-width: 1023px) {
  .mobile-login-page {
    display: none;
  }
}

/* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
@media all and (max-width: 767px) {
  .pc-login-page {
    display: none;
  }
}
</style>
