<template>
  <div class="friendinfo">
    <div class="friendinfo-menu1">
      <div class="friendinfo-profileimg">
        <img :src="friendInfoImg" alt="profile-img" />
      </div>
    </div>
    <div class="friendinfo-menu2">
      <div class="friendinfo-name">
        <p>name</p>
      </div>
      <div class="friendinfo-comment">
        <p>comment</p>
      </div>
      <div class="friendinfo-add">
        <button>Add to friends</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      friendInfoImg: "",
    };
  },
};
</script>

<style>
.friendinfo {
  width: 100%;
  border: 1px solid black;
}
.friendinfo-menu1 {
  float: left;
  width: 50%;
  text-align: center;
  border: 1px solid black;
}
.friendinfo-profileimg img {
  border-radius: 50%;
}
.friendinfo-menu2 {
  /* float: left; */
  width: 50%;
  text-align: center;
  border: 1px solid black;
}
</style>
