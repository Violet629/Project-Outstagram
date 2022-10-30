<template>
  <div class="post-search">
    <div class="post-search-input">
      <input
        type="text"
        name="search"
        placeholder="Post Search"
        autocomplete="off"
        v-model="searchInput"
      />
      <img @click="search()" src="../assets/icon/search3.png" />
    </div>
    <div class="post-search-result">
      <div
        class="result-list"
        v-for="postList in $store.state.searchPostData"
        :key="postList"
      >
        <img
          :src="postList.postimg"
          alt="Post Img"
          class="filter-item animate__animated animate__fadeInUp"
          :class="postList.filter"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      searchInput: "",
    };
  },
  methods: {
    search() {
      axios
        .post("searchinput", {
          input: this.searchInput,
        })
        .then((res) => {
          console.log(res.data);
          this.$store.state.searchPostData = res.data;
        })
        .catch(function (err) {
          console.log(err);
        });
    },
  },
  created() {
    axios
      .get("searchpost")
      .then((res) => {
        this.$store.state.searchPostData = res.data.slice(0, 18);
      })
      .catch((err) => {
        console.error(err.message);
      });
  },
};
</script>

<style>
.post-search-input {
  text-align: center;
  margin: 24px;
  display: flex;
  justify-content: center;
}
.post-search-input input {
  border: 2px solid rgba(153, 153, 153, 0.8);
  border-right: 0;
  border-radius: 12px 0px 0px 12px;
  padding: 12px 85px 12px 16px;
  font-size: 24px;
}
.post-search-input img {
  width: 35px;
  height: 35px;
  border: 2px solid hsla(0, 0%, 60%, 0.8);
  border-radius: 0 24px 24px 0;
  padding: 12px 24px;
}
.post-search-result {
  border-top: 2px solid rgba(153, 153, 153, 0.8);
  width: 100%;
}
.result-list {
  width: 90%;
  margin: 0 auto;
}
.result-list img {
  width: 350px;
  height: 350px;
  margin: 0.1%;
  float: left;
}
</style>
