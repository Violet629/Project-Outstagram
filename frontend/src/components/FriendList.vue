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
}
/* .friend-text {
  font-family: "Roboto", sans-serif;
} */
.friend-icon {
  margin: 14px;
}
.icon-img {
  border: 2px solid transparent;
  border-radius: 50%;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to bottom, violet 0%, orange 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  width: 60px;
  height: 60px;
}
.icon-name {
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  text-align: center;
  margin: 2px;
}
</style>
