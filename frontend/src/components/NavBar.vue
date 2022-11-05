<template>
  <div>
    <div class="header">
      <div class="header-menu-1">
        <router-link to="/home" style="text-decoration: none">
          <p class="logo">Outstagram</p>
        </router-link>
      </div>
      <!-- <div class="header-menu-2">
        <input
          v-model="inputSearch"
          class="search"
          type="text"
          placeholder=" 🔍 Search"
        />
      </div> -->
      <div class="header-menu-3">
        <div>
          <router-link to="/home" v-if="this.urlName != `/home`"
            ><img class="menu3-button" src="../assets/icon/home.png" />
          </router-link>
          <router-link to="/home" v-if="this.urlName == `/home`"
            ><img
              class="menu3-button act-button"
              src="../assets/icon/home2.png"
          /></router-link>
        </div>
        <div>
          <router-link to="/mypage" v-if="this.urlName != `/mypage`"
            ><img class="menu3-button" src="../assets/icon/me.png"
          /></router-link>
          <router-link to="/mypage" v-if="this.urlName == `/mypage`"
            ><img class="menu3-button act-button" src="../assets/icon/me2.png"
          /></router-link>
        </div>
        <div>
          <router-link to="/add_post" v-if="this.urlName != `/add_post`"
            ><img class="menu3-button" src="../assets/icon/add.png"
          /></router-link>
          <router-link to="/add_post" v-if="this.urlName == `/add_post`"
            ><img class="menu3-button act-button" src="../assets/icon/add2.png"
          /></router-link>
        </div>
        <div>
          <router-link to="/search" v-if="this.urlName != `/search`"
            ><img class="menu3-button" src="../assets/icon/search.png"
          /></router-link>
          <router-link to="/search" v-if="this.urlName == `/search`"
            ><img
              class="menu3-button act-button"
              src="../assets/icon/search2.png"
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
          <router-link to="/home" v-if="this.urlName != `/home`"
            ><img class="footer-button" src="../assets/icon/home.png"
          /></router-link>
          <router-link to="/home" v-if="this.urlName == `/home`"
            ><img
              class="footer-button act-button"
              src="../assets/icon/home2.png"
          /></router-link>
        </div>
        <div>
          <router-link to="/mypage" v-if="this.urlName != `/mypage`"
            ><img class="footer-button" src="../assets/icon/me.png"
          /></router-link>
          <router-link to="/mypage" v-if="this.urlName == `/mypage`"
            ><img class="footer-button act-button" src="../assets/icon/me2.png"
          /></router-link>
        </div>
        <div>
          <router-link to="/add_post" v-if="this.urlName != `/add_post`"
            ><img class="footer-button" src="../assets/icon/add.png"
          /></router-link>
          <router-link to="/add_post" v-if="this.urlName == `/add_post`"
            ><img
              class="footer-button act-button"
              src="../assets/icon/add2.png"
          /></router-link>
        </div>
        <div>
          <router-link to="/search" v-if="this.urlName != `/search`"
            ><img class="footer-button" src="../assets/icon/search.png"
          /></router-link>
          <router-link to="/search" v-if="this.urlName == `/search`"
            ><img
              class="footer-button act-button"
              src="../assets/icon/search2.png"
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
    return {
      // 호스트네임 / 뒷 문자 가져옴
      urlName: window.location.pathname,
      inputSearch: "",
    };
  },
  methods: {
    logout() {
      axios.post("http://localhost:8080/logout");
    },
    // search(obj) {
    //   axios
    //     .post("leaveComment", {
    //       postObjId: obj,
    //       userId: this.$store.state.userData.userID,
    //       userImg: this.$store.state.userData.profileImg,
    //       inputText: this.inputText,
    //     })
    //     .then((res) => {
    //       // console.log(res.data);
    //       this.$store.state.postData = res.data;
    //     })
    //     .catch(function (err) {
    //       console.log(err);
    //     });
    // },
    search() {
      alert("ok");
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
/* logo font : font-family: 'Kaushan Script', cursive; */
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-bottom: solid 1px rgba(153, 153, 153, 0.3);
}
.logo {
  font-family: "Kaushan Script", cursive;
  font-size: 35px;
  margin: 15px 100px;
  color: black;
  text-decoration-line: none;
}
/* .search {
  width: 260px;
  height: 28px;
  padding: 2px 0px 2px 12px;
  background-color: rgba(153, 153, 153, 0.3);
  border: 1px solid rgba(153, 153, 153, 0.8);
  border-radius: 15px;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
} */
.header-menu-3 {
  display: flex;
  margin: 0px 80px;
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
  padding-bottom: 2px;
  border-radius: 10%;
  border-bottom: 1px solid rgb(0, 0, 0);
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
  .mobile-footer {
    z-index: 99;
  }
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
