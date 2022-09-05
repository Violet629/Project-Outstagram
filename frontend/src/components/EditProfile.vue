<template>
  <div class="editprofile">
    <div class="editprofile-header">
      <p>Edit Profile</p>
    </div>
    <form action="editprofile" method="post">
      <div class="editprofile-img">
        <h3>Profile Image</h3>
        <img :src="$store.state.userData.profileImg" />
        <input
          type="file"
          id="file"
          accept="image/png, image/jpeg"
          @change="upload()"
          style="display: none"
        />
        <label for="file">Select File</label>
      </div>
      <div class="editprofile-comment">
        <h3>Profile Comment</h3>
        <p>{{ $store.state.userData.profileComment }}</p>
        <input type="text" />
      </div>
      <div class="editprofile-button">
        <button class="editprofile-submit" type="submit">Edit</button>
        <button class="editprofile-cancel">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    upload(e) {
      let 파일 = e.target.files;
      let url = URL.createObjectURL(파일[0]);
      console.log(url);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap");
/* Roboto font 400&700 : font-family: 'Roboto', sans-serif; */

.editprofile {
  width: 50%;
  height: 500px;
  border-radius: 8px;
  font-family: "Roboto", sans-serif;
  border: 2px solid rgba(153, 153, 153, 0.8);
}
.editprofile-header {
  width: 100%;
  float: left;
  font-size: 24px;
  font-weight: 700;
  background-color: rgba(153, 153, 153, 0.8);
}
.editprofile-header p {
  margin: 6px 0px 6px 0px;
}
.editprofile-img,
.editprofile-comment {
  float: left;
  width: 50%;
  text-align: center;
}
.editprofile-img h3 {
  font-size: 24px;
  margin: 24px 0px 8px 0px;
}
.editprofile-img img {
  width: 55%;
  border-radius: 50%;
  border: 2px solid rgba(153, 153, 153, 0.8);
  margin: 24px 0px 24px 0px;
}
.editprofile-img label {
  display: inline-block;
  margin: 12px 0px 24px 0px;
  padding: 4px 0px 4px 0px;
  width: 50%;
  border: 2px solid rgba(153, 153, 153, 0.8);
  border-radius: 8px;
}
.editprofile-comment h3 {
  font-size: 24px;
  margin: 24px 0px 8px 0px;
}
.editprofile-comment p {
  border: 2px solid rgba(153, 153, 153, 0.8);
  border-radius: 8px;
  display: inline-block;
  width: 85%;
  text-align: left;
  padding: 6px 0px 100px 8px;
}
.editprofile-comment input {
  border: 2px solid rgba(153, 153, 153, 0.8);
  border-radius: 8px;
  display: inline-block;
  width: 85%;
  padding: 6px 0px 100px 8px;
  margin: 0px 0px 48px 0px;
}
.editprofile-button {
  text-align: right;
  margin-right: 12px;
}
.editprofile-submit,
.editprofile-cancel {
  font-size: 20px;
  border: 2px solid rgba(153, 153, 153, 0.8);
  border-radius: 8px;
  background-color: #fff;
  margin: 4px;
  padding: 8px 24px 8px 24px;
  font-family: "Roboto", sans-serif;
}
</style>
