<template>
  <div class="signup-complete">
    <div class="pc-signup-complete">
      <div class="signup-complete-icon">
        <img src="../assets/icon/badge.png" />
      </div>
      <div class="signup-complete-header">
        <span style="text-decoration-line: underline">Enjoy</span>
        <span style="font-family: 'Kaushan Script', cursive"> Outstagram</span>
      </div>
      <div class="signup-complete-messages">
        <div>Sign Up Complete</div>
      </div>
      <div class="signup-complete-button">
        <router-link to="/" class="to-loginpage">Login Page</router-link>
      </div>
    </div>
    <div class="mobile-signup-complete">
      <div class="mobile-signup-complete-icon">
        <img src="../assets/icon/badge.png" />
      </div>
      <div class="mobile-signup-complete-header">
        <span style="text-decoration-line: underline">Enjoy</span>
        <span style="font-family: 'Kaushan Script', cursive"> Outstagram</span>
      </div>
      <div class="mobile-signup-complete-messages">
        <div>Sign Up Complete</div>
      </div>
      <div class="mobile-signup-complete-button">
        <router-link to="/" class="mobile-to-loginpage">Login Page</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SigupComplete",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
/* logo font : font-family: 'Kaushan Script', cursive; */

.pc-signup-complete {
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
.signup-complete-icon img {
  width: 46px;
  margin-bottom: 14px;
}
.signup-complete-header {
  font-family: "Roboto", sans-serif;
  font-size: 36px;
  margin-bottom: 32px;
}
.signup-complete-messages {
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
.mobile-signup-complete {
  width: 100%;
  text-align: center;
  margin: 45% auto;
}
.mobile-signup-complete-icon img {
  width: 80px;
  margin: 24px;
}
.mobile-signup-complete-header {
  font-size: 48px;
  margin-bottom: 18px;
}
.mobile-signup-complete-messages {
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  margin-bottom: 18px;
}
.mobile-signup-complete-button {
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

@media all and (min-width: 1024px) {
  .mobile-signup-complete {
    display: none;
  }
}

@media all and (min-width: 768px) and (max-width: 1023px) {
  .mobile-signup-complete {
    display: none;
  }
}

@media all and (max-width: 767px) {
  .pc-signup-complete {
    display: none;
  }
}
</style>
