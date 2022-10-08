import { createStore } from "vuex";

// 스토리지에 데이터 저장
// import createPersistedState from "vuex-persistedstate";

const store = createStore({
  // plugins: [createPersistedState()],
  state() {
    return {
      userData: [],
      postData: [],
      myPostData: [],
      myLikeData: [],
      editModal: false,
      upPostModal: false,
    };
  },
  mutations: {
    openEditModal(state) {
      state.editModal = true;
    },
    closeEditModal(state) {
      state.editModal = false;
    },
    openUpPostModal(state) {
      state.upPostModal = true;
    },
    openUpPostModal(state) {
      state.upPostModal = false;
    },
  },
});

export default store;
