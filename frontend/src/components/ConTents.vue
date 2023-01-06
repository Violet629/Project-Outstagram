<template>
  <div class="contents-list">
    <div
      class="contents animate__animated"
      v-for="contentsData in $store.state.postData"
      :key="contentsData"
    >
      <div class="profile">
        <img
          @click="friendInfo(contentsData.userID)"
          :src="contentsData.profileimg"
          alt="profile-img"
        />
        <p class="profile-name">{{ contentsData.userID }}</p>
        <p class="contents-time">{{ contentsData.timestamp }}</p>
      </div>
      <div class="contents-img">
        <img
          :src="contentsData.postimg"
          alt="contents-img"
          class="filter-item"
          :class="contentsData.filter"
        />
      </div>
      <div class="contents-post">
        <p class="post-feed">
          {{ contentsData.postfeed }}
        </p>
        <br />
        <div class="post-taglist">
          <p
            class="post-tag"
            v-for="taglist in contentsData.posttag"
            :key="taglist"
          >
            {{ "#" + taglist }}
          </p>
        </div>
        <div class="post-comment">
          <div
            class="post-commentlist"
            v-for="commentlist in contentsData.comment"
            :key="commentlist"
          >
            <img class="commentlist-profileimg" :src="commentlist.profileimg" />
            <p class="commentlist-name">
              {{ commentlist.userID }}
            </p>
            <p class="commentlist-text">
              {{ commentlist.text }}
            </p>
          </div>
        </div>
        <div class="post-like">
          <img
            @click="postLike(contentsData._id)"
            class="like-icon"
            src="../assets/icon/heart.png"
            alt="like"
          />
          <div class="like-count">
            {{ contentsData.like.length + " like" }}
          </div>
        </div>
      </div>
      <div class="leavecomment">
        <input
          type="text"
          placeholder="Leave your Comment"
          name="leaveComment"
          autocomplete="off"
          v-model="inputText"
        />
        <button @click="leaveComment(contentsData._id)" class="comment-send">
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConTents",
  data() {
    return {
      updatePostData: 0,
      inputText: "",
    };
  },
  methods: {
    postLike(obj) {
      axios
        .post("postlike", {
          postObjId: obj,
          userId: this.$store.state.userData.userID,
        })
        .then((res) => {
          this.$store.commit("changePostData", res.data.slice(0, 3));
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    leaveComment(obj) {
      axios
        .post("leaveComment", {
          postObjId: obj,
          userId: this.$store.state.userData.userID,
          userImg: this.$store.state.userData.profileImg,
          inputText: this.inputText,
        })
        .then((res) => {
          this.inputText = "";
          this.$store.commit("changePostData", res.data.slice(0, 3));
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    friendInfo(name) {
      axios
        .post("friendInfo", {
          name: name,
        })
        .then((res) => {
          this.$store.commit("changeFriendInfoData", res.data);
          this.$store.commit("openFriendModal");
        })
        .catch(function (err) {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.contents {
  width: 100%;
  max-width: 60%;
  float: left;
  margin-top: 8px;
  border: 1px solid rgba(153, 153, 153, 0.3);
  border-radius: 8px;
  background-color: #fff;
}
.profile {
  display: flex;
  align-items: center;
}
.profile img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 12px;
}
.profile-name {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 700;
}
.contents-time {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  opacity: 0.5;
  margin-left: 12px;
}
.contents-img {
  width: 100%;
  height: 500px;
  overflow: hidden;
}
.contents-img img {
  width: 100%;
  height: 100%;
}
.contents-post {
  width: 100%;
}
.post-feed {
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  padding-left: 16px;
  margin: 0;
  margin-top: 12px;
}
.post-taglist {
  display: flex;
  border-bottom: 1px solid rgba(153, 153, 153, 0.3);
}
.post-tag {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: rgba(0, 0, 255, 0.7);
  margin-left: 12px;
}
.post-like {
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
}
.like-icon {
  width: 25px;
  height: 25px;
  padding: 16px;
}
.leavecomment {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(153, 153, 153, 0.3);
}
.leavecomment input {
  width: 80%;
  padding: 16px;
  border: 0;
  border-right: 1px solid rgba(153, 153, 153, 0.3);
  border-radius: 0px 0px 0px 8px;
}
.comment-send {
  width: 20%;
  font-size: 16px;
  color: blue;
  background-color: #fff;
  border: 0;
}
.post-comment {
  max-height: 160px;
  overflow: scroll;
  overflow-x: hidden;
}
.post-comment::-webkit-scrollbar {
  width: 10px;
}
.post-comment::-webkit-scrollbar-thumb {
  background-color: #2f3542;
  border-radius: 10px;
  background-clip: padding-box;
  border: 2px solid transparent;
}
.post-comment::-webkit-scrollbar-track {
  background-color: rgba(153, 153, 153, 0.3);
  border-radius: 10px;
  box-shadow: inset 0px 0px 5px white;
  display: none;
}
.post-commentlist {
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
}
.commentlist-profileimg {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin: 4px;
  margin-left: 10px;
}
.commentlist-name {
  font-size: 16px;
  margin-right: 4px;
  font-weight: 700;
}
.commentlist-text {
  font-size: 16px;
}
.animate__fadeInUp {
  --animate-duration: 0.5s;
}
@media all and (min-width: 1024px) {
}

@media all and (min-width: 768px) and (max-width: 1023px) {
  .contents {
    max-width: 90%;
    float: none;
    margin: 0px auto 24px auto;
  }
}

@media all and (max-width: 767px) {
  .contents {
    max-width: 100%;
    float: none;
    margin: 0px auto 24px auto;
  }
  .contents {
    border-left: none;
    border-right: none;
  }
}
</style>
