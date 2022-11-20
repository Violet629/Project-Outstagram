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
            v-for="mypost in $store.state.myPostData"
            :key="mypost"
            :src="mypost.postimg"
            class="filter-item animate__animated animate__zoomIn"
            :class="mypost.filter"
          />
        </div>
        <div
          class="mycontent-mylikes"
          v-if="switchMenuber == 0 || switchMenuber == 2"
        >
          <img
            v-for="mylike in $store.state.myLikeData"
            :key="mylike"
            :src="mylike.postimg"
            class="filter-item animate__animated animate__zoomIn"
            :class="mylike.filter"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mycontents",
  data() {
    return {
      switchMenuber: 0,
      number: 0,
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
  background-color: rgba(247, 247, 247, 0.7);
}
.mycontent-myposts,
.mycontent-mylikes {
  width: 90%;
  margin: 0 auto;
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
.animate__zoomIn {
  --animate-duration: 0.5s;
}
.ani {
  animation-delay: 0.1;
  animation-delay: 1s;
}
@media all and (min-width: 1024px) {
}

@media all and (min-width: 768px) and (max-width: 1023px) {
  .mycontent-myposts img,
  .mycontent-mylikes img {
    width: 31%;
  }
}

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
