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
      myFollowData: [],
      friendInfoData: [],
      friendModal: false,
      editModal: false,
      upPostModal: false,
    };
  },
  mutations: {
    openFriendModal(state) {
      state.friendModal = true;
    },
    closeFriendModal(state) {
      state.friendModal = false;
    },
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
    changeUserData(state, payload) {
      state.userData = payload;
    },
    changePostData(state, payload) {
      state.postData = payload;
    },
    changeMyPostData(state, payload) {
      state.myPostData = payload;
    },
    changeMyLikeData(state, payload) {
      state.myLikeData = payload;
    },
    changeMyFollowData(state, payload) {
      state.myFollowData = payload;
    },
    changeFriendInfoData(state, payload) {
      state.friendInfoData = payload;
    },
  },
});

export default store;
