<template>
  <div>
    <div class="header">
      <div class="header-menu-1">
        <p class="logo">Outstagram</p>
      </div>
      <div class="header-menu-2">
        <input class="search" type="text" placeholder=" 🔍 Search" />
      </div>
      <div class="header-menu-3">
        <router-link to="/"
          ><img class="menu3-button" src="../assets/icon/home2.png"
        /></router-link>
        <router-link to="/"
          ><img class="menu3-button" src="../assets/icon/me.png"
        /></router-link>
        <router-link to="/"
          ><img class="menu3-button" src="../assets/icon/add.png"
        /></router-link>
        <router-link to="/"
          ><img class="menu3-button" src="../assets/icon/heart.png"
        /></router-link>
        <router-link to="/"
          ><img class="menu3-button" src="../assets/icon/logout.png"
        /></router-link>
      </div>
    </div>
    <MainPage />
  </div>
</template>

<script>
import MainPage from "./MainPage.vue";
import axios from "axios";

export default {
  name: "Homepage",
  data() {
    return {};
  },
  components: {
    MainPage,
  },
  // 로딩 했을때 유저데이터 요청
  mounted() {
    axios
      .get("http://localhost:8080/userdata")
      .then((res) => {
        console.log(res.data[0]);
        this.$store.state.userdata = res.data[0];
      })
      .catch((err) => {
        console.error(err.message);
      });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
/* logo font : font-family: 'Kaushan Script', cursive; */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap");
/* Roboto font 400&700 : font-family: 'Roboto', sans-serif; */

.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
  border-bottom: solid 2px rgba(153, 153, 153, 0.8);
}
.logo {
  font-family: "Kaushan Script", cursive;
  font-size: 35px;
  margin: 15px;
}
.search {
  width: 260px;
  height: 28px;
  padding: 4px 16px 4px 14px;
  background-color: rgba(153, 153, 153, 0.3);
  border: 1px solid rgba(153, 153, 153, 0.8);
  border-radius: 15px;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
}
.menu3-button {
  margin-right: 18px;
  width: 28px;
}
</style>
