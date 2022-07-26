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
        <button class="login-button">login</button>
        <button class="logout-button">logout</button>
      </div>
    </div>

    <MainPage />
  </div>
</template>

<script>
import MainPage from "./components/MainPage.vue";
export default {
  name: "App",
  components: {
    MainPage,
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
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
  border-bottom: solid 2px rgb(233, 233, 233);
}
.logo {
  font-family: "Kaushan Script", cursive;
  font-size: 35px;
  margin: 15px;
}
.search {
  width: 260px;
  height: 28px;
  background-color: rgb(233, 233, 233);
  border: 0;
  border-radius: 15px;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
}
.login-button,
.logout-button {
  font-size: 18px;
  width: 100px;
  height: 36px;
  font-family: "Roboto", sans-serif;
}
</style>
