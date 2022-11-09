<template>
  <div class="myprofile">
    <div class="pc-myprofile">
      <div class="myprofile-menu1">
        <img
          class="myprofile-setting"
          @click="$store.commit('openEditModal')"
          src="../assets/icon/setting.png"
          alt="Setting"
        />
        <img
          @click="$store.commit('openEditModal')"
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
          <!-- <div class="myprofile-setting">
            <button @click="$store.commit('openEditModal')">
              Edit Profile
            </button>
          </div> -->
        </div>
        <div class="menu2-mid">
          <div class="myprofile-post">
            <p>{{ $store.state.userData.post.length }} post</p>
          </div>
          <div class="myprofile-like">
            <p>{{ $store.state.userData.like.length }} like post</p>
          </div>
          <div class="myprofile-follower">
            <p>{{ $store.state.userData.follower.length }} follower</p>
          </div>
        </div>
        <div class="menu2-bottom">
          <div class="myprofile-comment">
            <p style="font-weight: 700">My Comment</p>
            <p>{{ $store.state.userData.profileComment }}</p>
            <form
              action="/editprofile-comment"
              method="post"
              class="edit-comment"
            >
              <input
                :value="$store.state.userData.userID"
                name="userID"
                style="display: none"
              />
              <input
                type="text"
                name="comment"
                placeholder="Edit MyComment"
                autocomplete="off"
              />
              <button type="submit">Submit</button>
            </form>
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
.myprofile {
  width: 100%;
  height: 360px;
  /* margin: 18px 0px 0px 0px; */
  border-bottom: 1px solid rgba(153, 153, 153, 0.3);
}
.myprofile-menu1 {
  width: 20%;
  float: left;
  margin: 36px 72px 0px 48px;
}
.myprofile-img {
  width: 100%;
  height: 250px;
  /* object-fit: cover; */
  border-radius: 50%;
  border: 2px solid rgba(153, 153, 153, 0.8);
}
.myprofile-img:hover {
  opacity: 0.7;
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
  width: 26px;
  height: 26px;
  float: right;
  /* float: left;
  width: 25%;
  margin-top: 24px;
  display: flex;
  align-items: center; */
}
.myprofile-setting button {
  font-size: 18px;
  margin: 0;
  padding: 3px;
  border: 2px solid rgba(153, 153, 153, 0.8);
  background-color: #fff;
  font-family: "Roboto", sans-serif;
}
/* .myprofile-setting img {
  width: 26px;
  height: 26px;
  margin-left: 4px;
} */
.menu2-mid {
  width: 60%;
  float: left;
  display: flex;
  justify-content: space-between;
  font-size: 28px;
  font-family: "Roboto", sans-serif;
  margin: 0;
}
.menu2-mid p {
  margin: 12px 0px 12px 0px;
}
.menu2-bottom {
  width: 60%;
  float: left;
  font-family: "Roboto", sans-serif;
  margin-bottom: 0;
  font-size: 24px;
}
.edit-comment input {
  border: 1px solid rgba(153, 153, 153, 0.8);
  border-radius: 12px 0px 0px 12px;
  padding: 8px 42px 8px 8px;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
}
.edit-comment button {
  border: 1px solid rgba(153, 153, 153, 0.8);
  border-radius: 0px 12px 12px 0px;
  padding: 8px 12px 8px 12px;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
}
/* PC (해상도 1024px)*/
@media all and (min-width: 1024px) {
}

/* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
@media all and (min-width: 768px) and (max-width: 1023px) {
  .myprofile-menu1 {
    width: 30%;
  }
  .myprofile-menu2 {
    width: 55%;
  }
  .myprofile-name p {
    margin-top: 0;
  }
  .myprofile-img {
    max-width: 250px;
  }
  .menu2-bottom,
  .menu2-mid {
    width: 80%;
  }
  /* .myprofile-setting {
    margin-top: 32px;
  } */
}

/* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
@media all and (max-width: 767px) {
  .myprofile {
    height: 680px;
  }
  .myprofile-menu1 {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
  .myprofile-img {
    max-width: 250px;
    height: 250px;
    margin: 12px 0px 12px 0px;
  }
  /* .myprofile-setting img {
    position: absolute;
    right: 20px;
    top: 80px;
  } */
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
  .menu2-mid p {
    font-size: 24px;
    margin: 42px 0px;
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
  .edit-comment {
    margin-left: 24px;
  }
}
</style>
