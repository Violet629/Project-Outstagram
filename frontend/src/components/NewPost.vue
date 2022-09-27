<template>
  <div class="newpost">
    <div class="newpost-header">NEW POST</div>
    <div class="newpost-nav">
      <button class="newpost-nav-back">BACK</button>
      <button class="newpost-nav-next">NEXT</button>
    </div>
    <div v-if="newPostStep == 0">
      <div class="newpost-postimg">
        <img :src="newPostImgUrl" />
        <input
          @change="newPostPreview($event)"
          id="newpost-imgfile"
          type="file"
          style="display: none"
          accept="image/jpeg, image/png"
        />
        <label for="newpost-imgfile">Select File</label>
      </div>
      <div class="editimg" v-if="openFilter === true">
        <!-- <img
          :src="newPostImgUrl"
          class="filter-item"
          :class="imgFilter"
          v-for="imgFilter in imgFilter"
          :key="imgFilter"
        /> -->
        <div
          :style="`background-image:url(${newPostImgUrl})`"
          :src="newPostImgUrl"
          class="filter-item"
          :class="imgFilter"
          v-for="imgFilter in imgFilter"
          :key="imgFilter"
        ></div>
      </div>
    </div>
    <div v-if="newPostStep == 1"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newPostStep: 0,
      newPostImgUrl:
        "https://project-outstagram.s3.ap-northeast-2.amazonaws.com/post-img/placeholder.png",
      imgFilter: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
      openFilter: false,
    };
  },
  methods: {
    newPostPreview($event) {
      this.file = $event.target.files;
      this.newPostImgUrl = URL.createObjectURL(this.file[0]);
      //   console.log(this.newPostImgUrl);
      this.openFilter = true;
    },
  },
};
</script>

<style>
.newpost {
  width: 100%;
  margin: 0 auto;
}
.newpost-header {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  text-align: center;
  font-size: 36px;
  background-color: rgba(153, 153, 153, 0.8);
  padding: 8px 0px;
}
.newpost-nav {
  display: flex;
  justify-content: space-between;
  align-content: center;
  /* width: 90%; */
  /* margin: 0 auto; */
}
.newpost-nav button {
  border: 2px solid rgba(153, 153, 153, 0.8);
  border-radius: 8px;
  margin: 8px 0px;
  padding: 8px 24px;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
}
.newpost-postimg {
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.newpost-postimg img {
  width: 100%;
  /* width: 500px; */
  height: 500px;
  margin: 0px auto;
  border: 2px solid rgba(153, 153, 153, 0.8);
  object-fit: cover;
}
.newpost-postimg label {
  text-align: center;
  font-size: 20px;
  margin: 12px auto;
  width: 50%;
  padding: 12px 0px;
  border-radius: 8px;
  font-family: "Roboto", sans-serif;
  border: 2px solid rgba(153, 153, 153, 0.8);
}
.editimg {
  display: flex;
  overflow: scroll;
  overflow-y: hidden;
}
.editimg::-webkit-scrollbar {
  width: 10px;
}
.editimg::-webkit-scrollbar-thumb {
  background-color: #2f3542;
  border-radius: 10px;
  background-clip: padding-box;
  border: 2px solid transparent;
}
.editimg::-webkit-scrollbar-track {
  background-color: rgba(153, 153, 153, 0.8);
  border-radius: 10px;
  box-shadow: inset 0px 0px 5px white;
}
.filter-item {
  width: 150px;
  height: 150px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
