import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      _id: "",
      userID: "",
      userPW: "",
      myProfileImg: "",
      friend: [],
      post: [],
      like: [],
    };
  },
  mutations: {
    // loginStep(state) {
    //   if (state.loginPage === false) {
    //     state.loginPage = true;
    //   } else {
    //     state.loginPage = false;
    //   }
    // },
    userDataGet(state) {
      // state._id =
    },
  },
  mounted() {
    axios
      .get("http://localhost:8080/userdata")
      .then((r) => {
        console.log(r.data);
        this.userdata = r.data;
        console.log(this.userdata[0]);
      })
      .catch((e) => {
        console.error(e.message);
      });
  },
});

export default store;
