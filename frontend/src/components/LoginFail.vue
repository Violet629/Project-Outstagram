<template>
  <div class="login-fail">
    <div class="pc-login-fail">
      <div class="login-fail-icon">
        <img src="../assets/icon/exclamation.png" />
      </div>
      <div class="login-fail-header">
        <div>Login Fail</div>
      </div>
      <div class="login-fail-messages">
        <div>Incorrect ID or Password</div>
        <div>Please login again</div>
      </div>
      <div class="login-fail-button">
        <router-link to="/" class="to-loginpage">Login Page</router-link>
      </div>
    </div>
    <div class="mobile-login-fail">
      <div class="mobile-login-fail-icon">
        <img src="../assets/icon/exclamation.png" />
      </div>
      <div class="mobile-login-fail-header">
        <div>Login Fail</div>
      </div>
      <div class="mobile-login-fail-messages">
        <div>Incorrect ID or Password</div>
        <div>Please login again</div>
      </div>
      <div class="mobile-login-fail-button">
        <router-link to="/" class="mobile-to-loginpage">Login Page</router-link>
      </div>
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

.pc-login-fail {
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
.login-fail-icon img {
  width: 46px;
  margin-bottom: 14px;
}
.login-fail-header {
  font-family: "Roboto", sans-serif;
  font-size: 36px;
  margin-bottom: 32px;
  text-decoration-line: underline;
}
.login-fail-messages {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  margin-bottom: 18px;
}
.to-loginpage {
  font-family: "Roboto", sans-serif;
  display: inline-block;
  font-size: 18px;
  margin: 12px 12px 0px 12px;
  border-radius: 8px;
  border: 1px solid rgba(153, 153, 153, 0.8);
  list-style: none;
  text-decoration: none;
  color: black;
  padding: 10px 180px 10px 180px;
}
.mobile-login-fail {
  width: 100%;
  text-align: center;
  margin: 45% auto;
}
.mobile-login-fail-icon img {
  width: 80px;
  margin: 24px;
}
.mobile-login-fail-header {
  font-size: 48px;
  margin-bottom: 18px;
}
.mobile-login-fail-messages {
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  margin-bottom: 18px;
}
.mobile-login-fail-button {
  font-family: "Roboto", sans-serif;
  font-size: 28px;
  margin-bottom: 18px;
}
.mobile-to-loginpage {
  font-family: "Roboto", sans-serif;
  display: inline-block;
  font-size: 18px;
  margin: 12px 12px 0px 12px;
  border-radius: 8px;
  border: 1px solid rgba(153, 153, 153, 0.8);
  list-style: none;
  text-decoration: none;
  color: black;
  padding: 10px 144px 10px 144px;
}
/* PC (해상도 1024px)*/
@media all and (min-width: 1024px) {
  .mobile-login-fail {
    display: none;
  }
}

/* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
@media all and (min-width: 768px) and (max-width: 1023px) {
  .mobile-login-fail {
    display: none;
  }
}

/* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
@media all and (max-width: 767px) {
  .pc-login-fail {
    display: none;
  }
}
</style>
