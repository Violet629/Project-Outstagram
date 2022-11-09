<template>
  <div class="login-request">
    <div class="pc-login-request">
      <div class="login-request-icon">
        <img src="../assets/icon/exclamation.png" />
      </div>
      <div class="login-request-header">
        <div>Please login</div>
      </div>
      <div class="login-request-messages">
        <div>You have to login to use it</div>
      </div>
      <div class="login-request-button">
        <router-link to="/" class="to-loginpage">Login Page</router-link>
      </div>
    </div>
    <div class="mobile-login-request">
      <div class="mobile-login-request-icon">
        <img src="../assets/icon/exclamation.png" />
      </div>
      <div class="mobile-login-request-header">
        <div>Please login</div>
      </div>
      <div class="mobile-login-request-messages">
        <div>You have to login to use it</div>
      </div>
      <div class="mobile-login-request-button">
        <router-link to="/" class="mobile-to-loginpage">Login Page</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.pc-login-request {
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
  background-color: #fff;
}
.login-request-icon img {
  width: 46px;
  margin-bottom: 14px;
}
.login-request-header {
  font-family: "Roboto", sans-serif;
  font-size: 36px;
  margin-bottom: 32px;
  text-decoration-line: underline;
}
.login-request-messages {
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
.mobile-login-request {
  width: 100%;
  text-align: center;
  margin: 45% auto;
}
.mobile-login-request-icon img {
  width: 80px;
  margin: 24px;
}
.mobile-login-request-header {
  font-family: "Roboto", sans-serif;
  text-decoration-line: underline;
  font-size: 48px;
  margin-bottom: 18px;
}
.mobile-login-request-messages {
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  margin-bottom: 18px;
}
.mobile-login-request-button {
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
  .mobile-login-request {
    display: none;
  }
}

/* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
@media all and (min-width: 768px) and (max-width: 1023px) {
  .mobile-login-request {
    display: none;
  }
}

/* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
@media all and (max-width: 767px) {
  .pc-login-request {
    display: none;
  }
}
</style>
