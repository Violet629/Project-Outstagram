<template>
  <div class="mycontents">
    <div class="pc-mycontents">
      <div class="mycontent-menuber">
        <button class="menuber-all menuber-act" @click="allAct">All</button>
        <button class="menuber-myposts" @click="mypostAct">My Post</button>
        <button class="menuber-likes" @click="likeAct">Like</button>
      </div>
      <div class="mycontent-list">
        <div
          class="mycontent-myposts"
          v-if="switchMenuber == 0 || switchMenuber == 1"
        >
          <img
            v-for="mypost in 2"
            :key="mypost"
            src="https://placeimg.com/500/500/arch"
          />
        </div>
        <div
          class="mycontent-mylikes"
          v-if="switchMenuber == 0 || switchMenuber == 2"
        >
          <img
            v-for="mylike in 3"
            :key="mylike"
            src="https://placeimg.com/500/500/arch"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      switchMenuber: 0,
    };
  },
  methods: {
    allAct() {
      $(".menuber-myposts").removeClass("menuber-act");
      $(".menuber-likes").removeClass("menuber-act");
      $(".menuber-all").addClass("menuber-act");
      this.switchMenuber = 0;
    },
    mypostAct() {
      $(".menuber-all").removeClass("menuber-act");
      $(".menuber-likes").removeClass("menuber-act");
      $(".menuber-myposts").addClass("menuber-act");
      this.switchMenuber = 1;
    },
    likeAct() {
      $(".menuber-all").removeClass("menuber-act");
      $(".menuber-myposts").removeClass("menuber-act");
      $(".menuber-likes").addClass("menuber-act");
      this.switchMenuber = 2;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap");
/* Roboto font 400&700 : font-family: 'Roboto', sans-serif; */

.mycontents {
  width: 100%;
}
.mycontent-menuber {
  text-align: center;
}
.menuber-myposts,
.menuber-likes,
.menuber-all {
  border: 0;
  padding: 8px 42px 8px 42px;
  font-size: 22px;
  font-family: "Roboto", sans-serif;
}
.mycontent-myposts,
.mycontent-mylikes {
  width: 100%;
}
.mycontent-myposts img,
.mycontent-mylikes img {
  width: 30%;
  margin: 8px;
  float: left;
}
.menuber-act {
  font-weight: 700;
  text-decoration: underline;
}
.post-act {
  display: block;
}
.post-none {
  display: none;
}
/* PC (해상도 1024px)*/
@media all and (min-width: 1024px) {
}

/* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
@media all and (min-width: 768px) and (max-width: 1023px) {
}

/* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
@media all and (max-width: 767px) {
  .mycontent-menuber button {
    font-size: 20px;
  }
  .mycontent-myposts img,
  .mycontent-mylikes img {
    width: 100%;
    margin: 4px 0px 4px 0px;
  }
}
</style>
