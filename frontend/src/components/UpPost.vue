<template>
  <div class="up-post-modal">
    <div class="up-post">
      <div class="up-post-header">
        <p>Up Post</p>
      </div>
      <div class="up-post-nav">
        <p>Back</p>
        <p>Naxt</p>
      </div>
      <div class="up-post-img">
        <img src="../assets/icon/picture.png" />
        <input
          @change="preview($event)"
          id="postimg"
          accept="image/jpeg, image/png"
          type="file"
          style="display: none"
        />
      </div>
      <div class="up-post-select">
        <label for="postimg">Select File</label>
      </div>
      <div class="up-post-button">
        <button>Submit</button>
        <button>Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    preview($event) {
      this.file = $event.target.files;
      this.previewUrl = URL.createObjectURL(this.file[0]);
      console.log(this.previewUrl);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap");
/* Roboto font 400&700 : font-family: 'Roboto', sans-serif; */
@import "animate.css";

.up-post-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
.open-up-post {
  display: block;
}
.up-post {
  border-radius: 8px;
  font-family: "Roboto", sans-serif;
  border: 2px solid rgba(153, 153, 153, 0.8);
  transform: translateX(-50%) translateY(-50%);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  height: 65%;
  padding: 30px;
  margin: auto;
  text-align: center;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
}
.up-post-header {
  width: 100%;
  /* float: left; */
  font-size: 24px;
  padding: 4px 0px;
  font-weight: 700;
  background-color: rgba(153, 153, 153, 0.8);
  text-align: center;
}
.up-post-nav {
  display: flex;
  justify-content: space-between;
  margin: 12px;
  font-size: 22px;
}
.up-post-img {
  width: 100%;
  text-align: center;
}
.up-post-img img {
  width: 50%;
}
.up-post-select {
  width: 100%;
  text-align: center;
  margin: 12px 0px;
  font-size: 20px;
}
.up-post-select label {
  width: 35%;
  border-radius: 8px;
  padding: 4px 36px 4px 36px;
  background-color: #fff;
  border: 2px solid rgba(153, 153, 153, 0.8);
}
.up-post-button {
  text-align: right;
  margin: 12px 24px;
}
.up-post-button button {
  font-size: 20px;
  border: 2px solid rgba(153, 153, 153, 0.8);
  border-radius: 8px;
  background-color: #fff;
  margin: 4px;
  padding: 8px 24px 8px 24px;
  font-family: "Roboto", sans-serif;
}
</style>
