import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      // _id: "",
      // userID: "",
      // userPW: "",
      // myProfileImg: "",
      // friend: [],
      // post: [],
      // like: [],
      userdata: [],
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
  },
});

export default store;
