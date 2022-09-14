import { createStore } from "vuex";

// 스토리지에 데이터 저장
// import createPersistedState from "vuex-persistedstate";

const store = createStore({
  // plugins: [createPersistedState()],
  state() {
    return {
      userData: [],
      editModal: false,
    };
  },
  mutations: {
    openEditModal(state) {
      state.editModal = true;
    },
    closeEditModal(state) {
      state.editModal = false;
    },
  },
});

export default store;
