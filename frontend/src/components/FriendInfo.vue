<template>
  <div class="friendinfo-modal">
    <div class="friendinfo animate__animated animate__bounceIn">
      <div class="friendinfo-menu1">
        <div class="friendinfo-profileimg">
          <img
            :src="$store.state.friendInfoData[0].profileImg"
            alt="profile-img"
          />
        </div>
      </div>
      <div class="friendinfo-menu2">
        <div class="friendinfo-name">
          <p>{{ $store.state.friendInfoData[0].userID }}</p>
        </div>
        <div class="friendinfo-comment">
          <p>{{ $store.state.friendInfoData[0].profileComment }}</p>
        </div>
        <div class="friendinfo-data">
          <div class="friendinfo-post">
            <p>{{ $store.state.friendInfoData[0].post.length + " Post" }}</p>
          </div>
          <div class="friendinfo-like">
            <p>{{ $store.state.friendInfoData[0].like.length + " Like" }}</p>
          </div>
          <div class="friendinfo-friend">
            <p>
              {{ $store.state.friendInfoData[0].friend.length + " Friend" }}
            </p>
          </div>
        </div>
        <div class="friendinfo-button">
          <button @click="$store.commit('closeFriendModal')">Close</button>
          <button
            v-if="
              friendList.includes($store.state.friendInfoData[0].userID) ==
              false
            "
            @click="addFriend($store.state.friendInfoData[0].userID)"
          >
            Add to friend
          </button>
          <button
            @click="deleteFriend($store.state.friendInfoData[0].userID)"
            style="color: Red"
            v-if="
              friendList.includes($store.state.friendInfoData[0].userID) == true
            "
          >
            Delete friend
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      friendList: this.$store.state.userData.friend,
    };
  },
  created() {
    alert(friendList);
  },
  methods: {
    addFriend(name) {
      axios
        .post("addFriend", {
          userID: this.$store.state.userData.userID,
          friendName: name,
        })
        .then((res) => {
          // console.log(res.data);
          // this.$store.state.userData = res.data;
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    deleteFriend(name) {
      axios
        .post("deleteFriend", {
          userID: this.$store.state.userData.userID,
          friendName: name,
        })
        .then((res) => {
          // console.log(res.data);
          // this.$store.state.userData = res.data;
        })
        .catch(function (err) {
          console.log(err);
        });
    },
  },
};
</script>

<style>
@import "animate.css";

.friendinfo-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
.friendinfo {
  border-radius: 8px;
  border: 2px solid rgba(153, 153, 153, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 40%;
  height: 300px;
  padding: 25px;
  margin: auto;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
}
.friendinfo-menu1 {
  float: left;
  width: 45%;
  text-align: center;
}
.friendinfo-profileimg img {
  border-radius: 50%;
  width: 250px;
  height: 250px;
  margin: 24px 0px;
}
.friendinfo-menu2 {
  float: left;
  height: 100%;
  width: 55%;
  padding: 25px 0px;
  font-family: "Roboto", sans-serif;
}
.friendinfo-name p {
  font-size: 52px;
  margin: 0;
  font-weight: 700;
  width: 100%;
}
.friendinfo-comment {
  font-size: 24px;
  margin-top: 36px;
  width: 100%;
}
.friendinfo-data {
  display: flex;
  justify-content: space-between;
  font-size: 22px;
  align-items: center;
  height: 50px;
  width: 80%;
}
.friendinfo-add {
  width: 100%;
}
.friendinfo-button button {
  font-size: 18px;
  border: 2px solid rgba(153, 153, 153, 0.8);
  border-radius: 8px;
  background-color: #fff;
  margin: 35px 4px;
  padding: 8px 24px 8px 24px;
  font-family: "Roboto", sans-serif;
  float: right;
}
/* PC (해상도 1024px)*/
@media all and (min-width: 1024px) {
}

/* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
@media all and (min-width: 768px) and (max-width: 1023px) {
  .friendinfo {
    width: 80%;
  }
}

/* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
@media all and (max-width: 767px) {
  .friendinfo {
    width: 100%;
    padding: 0;
    height: 70%;
  }
  .friendinfo-menu1 {
    width: 100%;
  }
  .friendinfo-menu2 {
    width: 100%;
    text-align: center;
  }
  .friendinfo-button button {
    float: none;
    margin: 0;
  }
  .friendinfo-data {
    width: 100%;
    justify-content: space-around;
  }
}
</style>
