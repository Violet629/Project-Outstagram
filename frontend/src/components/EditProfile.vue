<template>
  <div class="editprofile-modal animate__animated animate__fadeIn">
    <div class="editprofile animate__animated animate__fadeInDown">
      <div class="editprofile-header">
        <p>Edit Profile</p>
      </div>
      <form
        action="/editprofile-img"
        method="post"
        enctype="multipart/form-data"
      >
        <div class="editprofile-img">
          <h3>Profile Image</h3>
          <img class="preview" :src="previewUrl" />
          <input
            @change="preview($event)"
            type="file"
            id="file"
            name="image"
            style="display: none"
            accept="image/jpeg, image/png"
          />
          <label for="file">Select File</label>
          <div class="editprofile-button">
            <button class="editprofile-submit" type="submit">Edit</button>
            <button
              class="editprofile-cancel"
              @click="$store.commit('closeEditModal')"
            >
              Cancel
            </button>
          </div>
        </div>
        <div style="display: none">
          <input :value="$store.state.userData.userID" name="userID" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditProfile",
  data() {
    return {
      previewUrl: this.$store.state.userData.profileImg,
    };
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
@import "animate.css";

.editprofile-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
.open-editprofile {
  display: block;
}
.editprofile {
  border-radius: 8px;
  font-family: "Roboto", sans-serif;
  border: 2px solid rgba(153, 153, 153, 0.8);
  transform: translateX(-50%) translateY(-50%);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 30%;
  height: 55%;
  padding: 30px;
  margin: auto;
  text-align: center;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
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
  width: 100%;
  text-align: center;
}
.editprofile-img h3 {
  font-size: 24px;
  margin: 24px 0px 8px 0px;
}
.preview {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 2px solid rgba(153, 153, 153, 0.8);
  display: block;
  margin: 24px auto;
}
.editprofile-img label {
  display: block;
  margin: 24px auto;
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
  display: flex;
  justify-content: flex-end;
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

@media all and (min-width: 1024px) {
}

@media all and (min-width: 768px) and (max-width: 1023px) {
  .editprofile {
    width: 55%;
  }
}

@media all and (max-width: 767px) {
  .editprofile {
    width: 100%;
    height: 100%;
    padding: 0;
  }
  .editprofile-img,
  .editprofile-comment {
    width: 100%;
  }
  .editprofile-comment p,
  .editprofile-comment input {
    padding: 6px 0px 50px 8px;
  }
  .editprofile-button {
    justify-content: center;
  }
}
</style>
