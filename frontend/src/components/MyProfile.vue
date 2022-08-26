<template>
  <div class="myprofile">
    <div>
      <div class="myprofile-menu1">
        <img
          class="myprofile-img"
          :src="$store.state.userData.profileImg"
          alt="myprofile-img"
        />
      </div>
      <div class="myprofile-menu2">
        <div class="menu2-top">
          <div class="myprofile-name">
            <p>{{ $store.state.userData.userID }}</p>
          </div>
          <div class="myprofile-setting">
            <span>Edit Profile</span>
            <img src="../assets/icon/setting.png" alt="Setting" />
          </div>
        </div>
        <div class="menu2-mid">
          <div class="myprofile-post">
            <p>{{ $store.state.userData.post.length }}post</p>
          </div>
          <div class="myprofile-like">
            <p>{{ $store.state.userData.like.length }}like</p>
          </div>
          <div class="friend">
            <p>{{ $store.state.userData.friend.length }}friend</p>
          </div>
        </div>
        <div class="menu2-bottom">
          <div class="myprofile-comment">
            <!-- <p>{{ $store.state.userData.mycomment }}</p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.myprofile {
  width: 100%;
  margin: 36px 0px 36px 0px;
}
.myprofile-menu1 {
}
.myprofile-img {
  width: 100%;
  border-radius: 50%;
  border: 2px solid rgba(153, 153, 153, 0.8);
}
</style>
