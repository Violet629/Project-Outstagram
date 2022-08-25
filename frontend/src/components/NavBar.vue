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
        <div>
          <router-link
            to="/home"
            @click="$store.commit('homeAct')"
            v-if="$store.state.buttonAct.home === false"
            ><img class="menu3-button" src="../assets/icon/home.png" />
          </router-link>
          <router-link to="/home" v-if="$store.state.buttonAct.home === true"
            ><img
              class="menu3-button act-button"
              src="../assets/icon/home2.png"
          /></router-link>
        </div>
        <div>
          <router-link
            to="/mypage"
            @click="$store.commit('mypageAct')"
            v-if="$store.state.buttonAct.mypage === false"
            ><img class="menu3-button" src="../assets/icon/me.png"
          /></router-link>
          <router-link
            to="/mypage"
            v-if="$store.state.buttonAct.mypage === true"
            ><img class="menu3-button act-button" src="../assets/icon/me2.png"
          /></router-link>
        </div>
        <div>
          <router-link
            to="/post_add"
            @click="$store.commit('addAct')"
            v-if="$store.state.buttonAct.add === false"
            ><img class="menu3-button" src="../assets/icon/add.png"
          /></router-link>
          <router-link to="/post_add" v-if="$store.state.buttonAct.add === true"
            ><img class="menu3-button act-button" src="../assets/icon/add2.png"
          /></router-link>
        </div>
        <div>
          <router-link
            to="/post_like"
            @click="$store.commit('likeAct')"
            v-if="$store.state.buttonAct.like === false"
            ><img class="menu3-button" src="../assets/icon/heart.png"
          /></router-link>
          <router-link
            to="/post_like"
            v-if="$store.state.buttonAct.like === true"
            ><img
              class="menu3-button act-button"
              src="../assets/icon/heart2.png"
          /></router-link>
        </div>
        <div>
          <router-link to="/logout" @click="logout">
            <img class="menu3-button" src="../assets/icon/logout.png"
          /></router-link>
        </div>
      </div>
    </div>
    <div class="mobile-footer">
      <div class="footer-menu">
        <div>
          <router-link
            to="/home"
            @click="$store.commit('homeAct')"
            v-if="$store.state.buttonAct.home === false"
            ><img class="footer-button" src="../assets/icon/home.png"
          /></router-link>
          <router-link to="/home" v-if="$store.state.buttonAct.home === true"
            ><img
              class="footer-button act-button"
              src="../assets/icon/home2.png"
          /></router-link>
        </div>
        <div>
          <router-link
            to="/mypage"
            @click="$store.commit('mypageAct')"
            v-if="$store.state.buttonAct.mypage === false"
            ><img class="footer-button" src="../assets/icon/me.png"
          /></router-link>
          <router-link
            to="/mypage"
            v-if="$store.state.buttonAct.mypage === true"
            ><img class="footer-button act-button" src="../assets/icon/me2.png"
          /></router-link>
        </div>
        <div>
          <router-link
            to="/post_add"
            @click="$store.commit('addAct')"
            v-if="$store.state.buttonAct.add === false"
            ><img class="footer-button" src="../assets/icon/add.png"
          /></router-link>
          <router-link to="/post_add" v-if="$store.state.buttonAct.add === true"
            ><img
              class="footer-button act-button"
              src="../assets/icon/add2.png"
          /></router-link>
        </div>
        <div>
          <router-link
            to="/post_like"
            @click="$store.commit('likeAct')"
            v-if="$store.state.buttonAct.like === false"
            ><img class="footer-button" src="../assets/icon/heart.png"
          /></router-link>
          <router-link
            to="/post_like"
            v-if="$store.state.buttonAct.like === true"
            ><img
              class="footer-button act-button"
              src="../assets/icon/heart2.png"
          /></router-link>
        </div>
        <div>
          <router-link to="/logout" @click="logout">
            <img class="footer-button" src="../assets/icon/logout.png"
          /></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "NavBar",
  data() {
    return {};
  },
  components: {},
  methods: {
    logout() {
      axios.post("http://localhost:8080/logout");
    },
  },
  // 로딩 했을때 유저데이터 요청
  mounted() {
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
  padding: 2px 0px 2px 12px;
  background-color: rgba(153, 153, 153, 0.3);
  border: 1px solid rgba(153, 153, 153, 0.8);
  border-radius: 15px;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
}
.header-menu-3 {
  display: flex;
}
.footer-menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  border-top: 1px solid rgba(153, 153, 153, 0.8);
  padding-top: 10px;
  padding-bottom: 6px;
}
.menu3-button {
  margin-right: 18px;
  width: 28px;
}
.footer-button {
  width: 28px;
}
.act-button {
  border-bottom: 1px solid rgb(209, 13, 13);
}
.mobile-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
/* PC (해상도 1024px)*/
@media all and (min-width: 1024px) {
  .mobile-footer {
    display: none;
  }
}
/* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
@media all and (min-width: 768px) and (max-width: 1023px) {
  .logo {
    font-size: 30px;
  }
  .search {
    width: 220px;
  }
  .menu3-button {
    width: 26px;
    margin-right: 14px;
  }
  .mobile-footer {
    display: none;
  }
}
/* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
@media all and (max-width: 767px) {
  .logo {
    font-size: 28px;
  }
  .search {
    width: 180px;
  }
  .menu3-button {
    display: none;
  }
}
</style>
