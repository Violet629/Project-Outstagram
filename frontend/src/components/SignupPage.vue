<template>
  <div class="signup-page">
    <div>
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
            class="signup-id"
            placeholder="New ID"
            name="login_id"
            @input="checkSubmit"
          />
        </div>
        <div>
          <input
            type="password"
            class="signup-pw"
            placeholder="New Password"
            name="login_pw"
            @input="checkSubmit"
          />
          <input
            type="password"
            class="resignup-pw"
            placeholder="Re-Enter Password"
            @input="checkSubmit"
          />
        </div>
        <button
          type="submit"
          class="signup-submit"
          :disabled="confirmPw === false"
        >
          Submit
        </button>
        <br />
        <router-link to="/" class="signup-Cancel">Cancel</router-link>
        <!-- <button class="signup-Cancel" @click="$store.commit('loginStep')">
          Cancel
        </button> -->
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
      this.inputId = document.querySelector(".signup-id").value;
      this.inputPw = document.querySelector(".signup-pw").value;
      this.inputRePw = document.querySelector(".resignup-pw").value;
      if (this.inputId !== "" && this.inputPw !== "") {
        if (this.inputPw === this.inputRePw) {
          this.confirmPw = true;
          document.querySelector(".signup-submit").innerHTML = "Submit";
        } else {
          this.confirmPw = false;
          document.querySelector(".signup-submit").innerHTML =
            "PW do not match";
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
  border: 1px solid rgba(153, 153, 153, 0.322);
}
.signup-submit,
.signup-Cancel {
  font-family: "Roboto", sans-serif;
  display: inline-block;
  font-size: 18px;
  margin: 12px 12px 0px 12px;
  border-radius: 8px;
  border: 1px solid rgba(153, 153, 153, 0.322);
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
</style>
