<template>
  <div class="signup-page">
    <div class="pc-signup-page">
      <div class="header">
        <div class="header-icon">
          <img src="../assets/icon/profile.png" />
        </div>
        <span class="header-text">Sign Up</span>
      </div>
      <form action="/signup" method="POST">
        <div>
          <input
            type="text"
            class="signup-id check-id"
            placeholder="New ID"
            autocomplete="off"
            name="login_id"
            @input="checkSubmit"
          />
        </div>
        <div>
          <input
            type="password"
            class="signup-pw check-pw"
            placeholder="New Password"
            name="login_pw"
          />
          <input
            type="password"
            class="resignup-pw check-repw"
            placeholder="Re-Enter Password"
            @input="checkSubmit"
          />
        </div>
        <button
          type="submit"
          class="signup-submit check-submit"
          :disabled="confirmPw === false"
        >
          Submit
        </button>
        <br />
        <router-link to="/" class="signup-Cancel">Cancel</router-link>
      </form>
    </div>
    <div class="mobile-signup-page">
      <div class="mobile-header">
        <div class="mobile-header-icon">
          <img src="../assets/icon/profile.png" />
        </div>
        <div class="mobile-header-text">Sign Up</div>
      </div>
      <form action="/signup" method="POST">
        <div>
          <input
            type="text"
            class="mobile-signup-id check-id"
            placeholder="New ID"
            autocomplete="off"
            name="login_id"
            @input="checkSubmit"
          />
        </div>
        <div>
          <input
            type="password"
            class="mobile-signup-pw check-pw"
            placeholder="New Password"
            name="login_pw"
          />
          <input
            type="password"
            class="mobile-resignup-pw check-repw"
            placeholder="Re-Enter Password"
            @input="checkSubmit"
          />
        </div>
        <button
          type="submit"
          class="mobile-signup-submit check-submit"
          :disabled="confirmPw === false"
        >
          Submit
        </button>
        <br />
        <router-link to="/" class="mobile-signup-Cancel">Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingupPage",
  data() {
    return {
      inputId: "",
      inputPw: "",
      inputRePw: "",
      confirmPw: false,
    };
  },
  methods: {
    checkSubmit() {
      this.inputId = document.querySelector(".check-id").value;
      this.inputPw = document.querySelector(".check-pw").value;
      this.inputRePw = document.querySelector(".check-repw").value;
      if (this.inputId !== "" && this.inputPw !== "") {
        if (this.inputPw === this.inputRePw) {
          this.confirmPw = true;
          document.querySelector(".check-submit").innerHTML = "Submit";
        } else {
          this.confirmPw = false;
          document.querySelector(".check-submit").innerHTML = "PW do not match";
        }
      } else {
        this.confirmPw = false;
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
/* logo font : font-family: 'Kaushan Script', cursive; */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap");
/* Roboto font 400&700 : font-family: 'Roboto', sans-serif; */

.pc-signup-page {
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
.header-icon img {
  width: 46px;
  margin-bottom: 14px;
}
.header-text {
  font-family: "Roboto", sans-serif;
  font-size: 28px;
  margin-bottom: 24px;
}
.signup-id,
.signup-pw,
.resignup-pw {
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  padding: 16px 128px 16px 12px;
  margin: 12px 12px 0px 12px;
  border-radius: 8px;
  border: 1px solid rgba(153, 153, 153, 0.8);
}
.signup-submit,
.signup-Cancel {
  font-family: "Roboto", sans-serif;
  display: inline-block;
  font-size: 18px;
  margin: 12px 12px 0px 12px;
  border-radius: 8px;
  border: 1px solid rgba(153, 153, 153, 0.8);
  list-style: none;
  text-decoration: none;
}
.signup-submit,
.signup-Cancel {
  padding: 10px 180px 10px 180px;
}
.signup-Cancel {
  color: black;
}
.mobile-signup-page {
  width: 100%;
  text-align: center;
  margin: 40% auto;
}
.mobile-header-icon img {
  width: 80px;
  margin: 24px;
}
.mobile-header-text {
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  margin-bottom: 18px;
}
.mobile-signup-id,
.mobile-signup-pw,
.mobile-resignup-pw {
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  padding: 16px 48px 16px 12px;
  border-radius: 8px;
  border: 1px solid rgba(153, 153, 153, 0.8);
  margin-bottom: 6px;
}
.mobile-signup-submit,
.mobile-signup-Cancel {
  font-family: "Roboto", sans-serif;
  display: inline-block;
  font-size: 18px;
  margin: 8px 12px 0px 12px;
  border-radius: 8px;
  border: 1px solid rgba(153, 153, 153, 0.8);
  list-style: none;
  text-decoration: none;
}
.mobile-signup-submit {
  padding: 10px 138px 10px 138px;
}
.mobile-signup-Cancel {
  padding: 10px 139px 10px 139px;
  color: black;
}
/* PC (해상도 1024px)*/
@media all and (min-width: 1024px) {
  .mobile-signup-page {
    display: none;
  }
}

/* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
@media all and (min-width: 768px) and (max-width: 1023px) {
  .mobile-signup-page {
    display: none;
  }
}

/* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
@media all and (max-width: 767px) {
  .pc-signup-page {
    display: none;
  }
}
</style>
