import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      login: false,
      singupStep: false,
    };
  },
  mutations: {
    changeSingup(state) {
      if (state.singupStep === false) {
        state.singupStep = true;
      } else {
        state.singupStep = false;
      }
    },
  },
});

export default store;
