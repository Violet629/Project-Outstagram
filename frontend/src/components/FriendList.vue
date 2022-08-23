<template>
  <div class="friend-list">
    <!-- <div class="friend-text">Friend</div> -->
    <div class="friend-icon" v-for="friendData in 5" :key="friendData">
      <img
        class="icon-img"
        src="https://placeimg.com/100/100/arch"
        alt="friend-icon"
      />
      <p class="icon-name">name</p>
    </div>
    <!-- <div class="friend-add">
      <img class="add-img" src="../assets/icon/add.png" alt="friend-add" />
    </div> -->
  </div>
</template>

<script>
export default {
  name: "FriendList",
  components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap");
/* Roboto font 400&700 : font-family: 'Roboto', sans-serif; */

.friend-list {
  width: 100%;
  max-width: 60%;
  float: left;
  margin-top: 55px;
  display: flex;
  border: solid 2px rgba(153, 153, 153, 0.8);
  border-radius: 8px;
  overflow: hidden;
}
.friend-icon,
.friend-add {
  width: 60px;
  margin: 14px;
}
.icon-img {
  border: 2px solid transparent;
  border-radius: 50%;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to bottom, violet 0%, orange 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  width: 100%;
  /* height: 60px; */
}
.add-img {
  width: 100%;
  opacity: 0.3;
}
.icon-name {
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  text-align: center;
  margin: 2px;
}
/* PC (해상도 1024px)*/
@media all and (min-width: 1024px) {
}

/* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
@media all and (min-width: 768px) and (max-width: 1023px) {
  .friend-list {
    max-width: 90%;
    float: none;
    margin: 24px auto 24px auto;
  }
}

/* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
@media all and (max-width: 767px) {
  .friend-list {
    max-width: 100%;
    float: none;
    margin: 12px auto 12px auto;
    border-left: none;
    border-right: none;
  }
}
</style>
