<template>
  <div class="newpost">
    <form action="newpost" method="post" enctype="multipart/form-data">
      <div class="newpost-nav">
        <div class="newpost-nav-back" @click="back()">BACK</div>
        <div class="newpost-header">NEW POST</div>
        <div class="newpost-nav-next" @click="next()" v-if="newPostStep !== 1">
          NEXT
        </div>
        <button type="submit" class="newpost-nav-post" v-if="newPostStep === 1">
          POST
        </button>
      </div>
      <div>
        <div class="newpost-postimg">
          <img :src="newPostImgUrl" :class="filterName" />
          <input
            @change="newPostPreview($event)"
            id="newpost-imgfile"
            type="file"
            style="display: none"
            accept="image/jpeg, image/png"
            name="image"
          />
          <label for="newpost-imgfile" v-if="newPostStep == 0"
            >Select File
          </label>
          <p v-if="newPostStep == 1">Image Filter {{ filterName }}</p>
        </div>
        <div v-if="openFilter == true && newPostStep == 0">
          <div class="editimg">
            <div
              v-for="imgFilter in imgFilter"
              :key="imgFilter"
              class="filter-item animate__animated animate__flipInX"
              :class="imgFilter"
            >
              <p>{{ imgFilter }}</p>
              <img :src="newPostImgUrl" @click="filterAdd(imgFilter)" />
            </div>
          </div>
        </div>
        <div class="newpost-input" v-if="newPostStep == 1">
          <input
            type="text"
            class="newpost-feed"
            name="newPostFeed"
            placeholder="Post Feed"
            autocomplete="off"
          />
          <br />
          <input
            type="text"
            class="newpost-tag"
            name="newPostTag"
            placeholder="#Tag"
            autocomplete="off"
          />
        </div>
      </div>
      <div style="display: none">
        <input type="text" :value="filterName" name="filterName" />
        <input
          type="text"
          :value="$store.state.userData.userID"
          name="userID"
        />
        <input
          type="text"
          :value="$store.state.userData.profileImg"
          name="profileimg"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "NewPost",
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
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
      openFilter: false,
      filterName: "",
    };
  },
  methods: {
    newPostPreview($event) {
      this.file = $event.target.files;
      this.newPostImgUrl = URL.createObjectURL(this.file[0]);
      this.openFilter = true;
    },
    filterAdd($filter) {
      this.filterName = $filter;
    },
    back() {
      if (this.newPostStep === 0) {
        return;
      }
      this.newPostStep--;
    },
    next() {
      this.newPostStep++;
    },
  },
};
</script>

<style>
.newpost {
  width: 100%;
  margin: 0 auto;
}
.newpost-nav {
  width: 60%;
  display: flex;
  margin: 0 auto;
  align-items: center;
}
.newpost-header {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  text-align: center;
  font-size: 36px;
  background-color: rgba(153, 153, 153, 0.8);
  padding: 8px 0px 8px 0px;
  margin-bottom: 12px;
  flex-grow: 6;
}
.newpost-nav-back {
  border-radius: 0px 0px 0px 12px;
}
.newpost-nav-post {
  border-radius: 0px 0px 12px 0px;
}
.newpost-nav-next {
  border-radius: 0px 0px 12px 0px;
}
.newpost-nav-post,
.newpost-nav-back,
.newpost-nav-next {
  font-family: "Roboto", sans-serif;
  text-align: center;
  font-size: 32px;
  padding: 8px 0px 8px 0px;
  margin-bottom: 12px;
  flex-grow: 2;
  border: 2.1px solid rgba(153, 153, 153, 0.8);
  background-color: #fff;
}
.newpost-postimg {
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.newpost-postimg img {
  width: 100%;
  height: 500px;
  margin: 0px auto;
  border: 2px solid rgba(153, 153, 153, 0.8);
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
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
.filter-item img {
  width: 150px;
  height: 150px;
  position: relative;
  z-index: 1;
}
.filter-item p {
  position: absolute;
  z-index: 50;
  margin: 4px;
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
}
.newpost-input {
  text-align: center;
}
.newpost-input {
  width: 60%;
  margin: 0 auto;
  border: 2px solid rgba(153, 153, 153, 0.8);
  border-radius: 8px;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
}
.newpost-feed {
  width: 99%;
  border: 0;
  border-bottom: 2px solid rgba(153, 153, 153, 0.8);
  padding: 4px 0px 42px 6px;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
}
.newpost-tag {
  width: 99%;
  border: 0;
  padding: 4px 0px 42px 6px;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
}

@media all and (min-width: 1024px) {
}

@media all and (min-width: 768px) and (max-width: 1023px) {
  .newpost-nav {
    width: 100%;
  }
  .newpost-postimg {
    width: 80%;
  }
  .newpost-postimg label {
    width: 100%;
  }
}

@media all and (max-width: 767px) {
  .newpost-nav {
    width: 100%;
  }
  .newpost-postimg {
    width: 100%;
  }
  .newpost-postimg img {
    height: 350px;
  }
  .newpost-postimg label {
    width: 100%;
  }
  .newpost-input {
    width: 95%;
  }
}
</style>
