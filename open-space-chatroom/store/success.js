export const state = () => ({
  message: '',
  displayModal: false,
});

export const mutations = {
  showModal(state, message) {
    state.message = message;
    state.displayModal = true;
  },

  hideModal(state) {
    state.displayModal = false;
  },
};

export const getters = {
  isModalShowing(state) {
    return state.displayModal;
  },
  successMessage(state) {
    return state.message;
  },
};

export const actions = {
  showModal(context, message) {
    context.commit('showModal', message);
  },

  hideModal(context) {
    context.commit('hideModal');
  },
};
