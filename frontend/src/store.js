import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "lee", // state 보관
    };
  },
});

export default store;
