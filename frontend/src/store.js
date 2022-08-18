import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      // login: false,
      // loginPage: false,
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
