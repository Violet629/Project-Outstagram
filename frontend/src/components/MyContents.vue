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
            v-for="(mypost, i) in $store.state.myPostData.length"
            :key="mypost"
            :src="$store.state.myPostData[i].postimg"
            class="filter-item"
            :class="$store.state.myPostData[i].filter"
          />
        </div>
        <div
          class="mycontent-mylikes"
          v-if="switchMenuber == 0 || switchMenuber == 2"
        >
          <img
            v-for="(mylike, j) in $store.state.myLikeData.length"
            :key="mylike"
            :src="$store.state.myLikeData[j].postimg"
            class="filter-item"
            :class="$store.state.myLikeData[j].filter"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  background-color: #fff;
}
.mycontent-myposts,
.mycontent-mylikes {
  width: 90%;
  margin: 0 auto;
  /* padding: 0 auto; */
  /* text-align: center; */
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* justify-content: center; */
}
.mycontent-myposts img,
.mycontent-mylikes img {
  width: 350px;
  height: 350px;
  margin: 0.1%;
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
  .mycontent-myposts img,
  .mycontent-mylikes img {
    width: 31%;
  }
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
