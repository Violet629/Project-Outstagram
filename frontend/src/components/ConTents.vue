<template>
  <div class="contents-list">
    <div class="contents" v-for="(contentsData, i) in 4" :key="contentsData">
      <div class="profile">
        <img :src="$store.state.postData[i].profileimg" alt="profile-img" />
        <p class="profile-name">{{ $store.state.postData[i].userID }}</p>
        <p class="contents-time">{{ $store.state.postData[i].timestamp }}</p>
      </div>
      <div class="contents-img">
        <img
          :src="$store.state.postData[i].postimg"
          alt="contents-img"
          class="filter-item"
          :class="$store.state.postData[i].filter"
        />
      </div>
      <div class="contents-post">
        <p class="post-text">
          {{ $store.state.postData[i].postcomment }}
        </p>
        <br />
        <div class="post-taglist">
          <p
            class="post-tag"
            v-for="(taglist, j) in $store.state.postData[i].posttag.length"
            :key="taglist"
          >
            {{ "#" + $store.state.postData[i].posttag[j] }}
          </p>
        </div>
        <img class="post-like" src="../assets/icon/heart.png" alt="like" />
      </div>
      <form action="leavecomment" method="post">
        <div class="post-comment">
          <input type="text" placeholder="Leave your Comment" />
          <button type="submit" class="comment-send">Send</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap");
/* Roboto font 400&700 : font-family: 'Roboto', sans-serif; */

/* .contents-list {
  overflow: hidden;
} */
.contents {
  width: 100%;
  max-width: 60%;
  float: left;
  margin-top: 22px;
  border: 2px solid rgba(153, 153, 153, 0.8);
  border-radius: 8px;
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
  font-size: 16px;
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
  /* object-fit: cover; */
}
.contents-post {
  width: 100%;
}
.post-text {
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  padding-left: 16px;
}
.post-taglist {
  display: flex;
}
.post-tag {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  color: rgba(0, 0, 255, 0.7);
  margin-left: 12px;
}
.post-like {
  width: 26px;
  padding: 16px;
}
.post-comment {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid rgba(153, 153, 153, 0.8);
}
.post-comment input {
  width: 80%;
  padding: 16px;
  border: 0;
}
.comment-send {
  width: 20%;
  font-size: 16px;
  color: blue;
  background-color: #fff;
  border: 0;
}
/* PC (해상도 1024px)*/
@media all and (min-width: 1024px) {
}

/* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
@media all and (min-width: 768px) and (max-width: 1023px) {
  .contents {
    max-width: 90%;
    float: none;
    margin: 0px auto 24px auto;
  }
}

/* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
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
