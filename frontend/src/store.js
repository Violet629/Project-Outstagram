import { createStore } from "vuex";
// 스토리지에 데이터 저장
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  plugins: [createPersistedState()],
  state() {
    return {
      userData: [],
      // buttonAct: {
      //   home: true,
      //   mypage: false,
      //   add: false,
      //   like: false,
      // },
      editModal: false,
    };
  },
  mutations: {
    openEditModal(state) {
      state.editModal = true;
    },
    // homeAct(state) {
    //   state.buttonAct.home = true;
    //   state.buttonAct.mypage = false;
    //   state.buttonAct.add = false;
    //   state.buttonAct.like = false;
    // },
    // mypageAct(state) {
    //   state.buttonAct.home = false;
    //   state.buttonAct.mypage = true;
    //   state.buttonAct.add = false;
    //   state.buttonAct.like = false;
    // },
    // addAct() {
    //   state.buttonAct.home = false;
    //   state.buttonAct.mypage = false;
    //   state.buttonAct.add = true;
    //   state.buttonAct.like = false;
    // },
    // likeAct() {
    //   state.buttonAct.home = false;
    //   state.buttonAct.mypage = false;
    //   state.buttonAct.add = false;
    //   state.buttonAct.like = true;
    // },
  },
});

export default store;
