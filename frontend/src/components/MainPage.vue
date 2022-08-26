<template>
  <div class="main-page">
    <NavBar />
    <FriendList />
    <ConTents />
    <MyInfo />
  </div>
</template>

<script>
import FriendList from "./FriendList.vue";
import ConTents from "./ConTents.vue";
import MyInfo from "./MyInfo.vue";
import NavBar from "./NavBar.vue";
import axios from "axios";

export default {
  name: "MainPage",
  components: {
    FriendList,
    ConTents,
    MyInfo,
    NavBar,
  },
  // 로딩 했을때 유저데이터 요청
  created() {
    axios
      .get("http://localhost:8080/userdata")
      .then((res) => {
        console.log(res.data[0]);
        this.$store.state.userData = res.data[0];
      })
      .catch((err) => {
        console.error(err.message);
      });
  },
};
</script>

<style>
.main-page {
  width: 100%;
  max-width: 1200px;
  margin: auto;
}
/* PC (해상도 1024px)
@media all and (min-width: 1024px) {
}

테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)
@media all and (min-width: 768px) and (max-width: 1023px) {
  .logo {
    font-size: 30px;
  }
  .search {
    width: 220px;
  }
  .menu3-button {
    width: 24px;
    margin-right: 10px;
  }
}

모바일 가로, 모바일 세로 (해상도 480px ~ 767px)
@media all and (max-width: 767px) {
  .logo {
    font-size: 25px;
  }
  .search {
    width: 180px;
  }
  .menu3-button {
    width: 22px;
    margin-right: 8px;
  }
} */
</style>
