<template>
  <div class="mypage">
    <NavBar />
    <MyProfile />
    <MyContents />
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import MyProfile from "./MyProfile.vue";
import MyContents from "./MyContents.vue";
import axios from "axios";

export default {
  components: {
    NavBar,
    MyProfile,
    MyContents,
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
.mypage {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
/* PC (해상도 1024px)*/
@media all and (min-width: 1024px) {
}

/* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
@media all and (min-width: 768px) and (max-width: 1023px) {
}

/* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
@media all and (max-width: 767px) {
}
</style>
