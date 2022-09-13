<template>
  <div class="myprofile">
    <div class="pc-myprofile">
      <div class="myprofile-menu1">
        <img
          class="myprofile-img"
          :src="$store.state.userData.profileImg"
          alt="myprofile-img"
        />
      </div>
      <div class="myprofile-menu2">
        <div class="menu2-top">
          <div class="myprofile-name">
            <p>{{ $store.state.userData.userID }}</p>
          </div>
          <div class="myprofile-setting">
            <button @click="$store.commit('openEditModal')">
              Edit Profile
            </button>
            <img src="../assets/icon/setting.png" alt="Setting" />
          </div>
        </div>
        <div class="menu2-mid">
          <div class="myprofile-post">
            <p>{{ $store.state.userData.post.length }} post</p>
          </div>
          <div class="myprofile-like">
            <p>{{ $store.state.userData.like.length }} like</p>
          </div>
          <div class="myprofile-friend">
            <p>{{ $store.state.userData.friend.length }} friend</p>
          </div>
        </div>
        <div class="menu2-bottom">
          <div class="myprofile-comment">
            <p style="font-weight: 700">My Comment</p>
            <p>{{ $store.state.userData.profileComment }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap");
/* Roboto font 400&700 : font-family: 'Roboto', sans-serif; */

.myprofile {
  width: 100%;
  height: 330px;
  margin: 18px 0px 0px 0px;
  border-bottom: 2px solid rgba(153, 153, 153, 0.8);
}
.myprofile-menu1 {
  width: 20%;
  float: left;
  margin: 36px 72px 0px 48px;
}
.myprofile-img {
  width: 100%;
  border-radius: 50%;
  border: 2px solid rgba(153, 153, 153, 0.8);
}
.myprofile-menu2 {
  width: 60%;
  float: left;
}
.menu2-top {
  font-family: "Roboto", sans-serif;
}
.myprofile-name p {
  float: left;
  width: 65%;
  font-size: 48px;
  margin: 24px 0px 12px 0px;
  font-weight: 700;
}
.myprofile-setting {
  float: left;
  width: 25%;
  margin-top: 24px;
  display: flex;
  align-items: center;
}
.myprofile-setting button {
  font-size: 18px;
  margin: 0;
  padding: 3px;
  border: 2px solid rgba(153, 153, 153, 0.8);
  background-color: #fff;
  font-family: "Roboto", sans-serif;
}
.myprofile-setting img {
  width: 26px;
  height: 26px;
  margin-left: 4px;
}
.menu2-mid {
  width: 60%;
  float: left;
  display: flex;
  justify-content: space-between;
  font-size: 28px;
  font-family: "Roboto", sans-serif;
  margin: 0;
}
.menu2-bottom {
  width: 60%;
  float: left;
  font-family: "Roboto", sans-serif;
  margin-bottom: 0;
  font-size: 24px;
}
/* PC (해상도 1024px)*/
@media all and (min-width: 1024px) {
}

/* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
@media all and (min-width: 768px) and (max-width: 1023px) {
  .myprofile-menu1 {
    width: 25%;
  }
  .myprofile-setting {
    margin-top: 32px;
  }
}

/* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
@media all and (max-width: 767px) {
  .myprofile {
    height: 420px;
  }
  .myprofile-menu1 {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
  .myprofile-img {
    max-width: 148px;
  }
  .myprofile-setting img {
    position: absolute;
    right: 20px;
    top: 80px;
  }
  .myprofile-setting button {
    display: none;
  }
  .myprofile-menu2 {
    width: 100%;
    text-align: center;
  }
  .myprofile-name p {
    width: 100%;
    margin: 0;
  }
  .menu2-top {
    text-align: center;
  }
  .menu2-mid {
    width: 100%;
    justify-content: space-around;
  }
  .menu2-bottom {
    width: 100%;
    text-align: left;
    font-size: 18px;
  }
  .menu2-bottom p:nth-child(1) {
    margin: 0;
    margin-left: 24px;
  }
  .menu2-bottom p:nth-child(2) {
    margin-top: 8px;
    margin-left: 24px;
  }
}
</style>
