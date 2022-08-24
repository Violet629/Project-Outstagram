import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      userData: [],
      buttonAct: {
        home: true,
        mypage: false,
        add: false,
        like: false,
      },
    };
  },
  mutations: {
    homeAct(state) {
      state.buttonAct.home = true;
      state.buttonAct.mypage = false;
      state.buttonAct.add = false;
      state.buttonAct.like = false;
    },
    mypageAct(state) {
      state.buttonAct.home = false;
      state.buttonAct.mypage = true;
      state.buttonAct.add = false;
      state.buttonAct.like = false;
    },
    addAct() {
      state.buttonAct.home = false;
      state.buttonAct.mypage = false;
      state.buttonAct.add = true;
      state.buttonAct.like = false;
    },
    likeAct() {
      state.buttonAct.home = false;
      state.buttonAct.mypage = false;
      state.buttonAct.add = false;
      state.buttonAct.like = true;
    },
  },
});

export default store;
