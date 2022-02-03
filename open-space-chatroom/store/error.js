export const state = () => ({
  message: '',
  displayError: false,
});

export const mutations = {
  showError(state, message) {
    state.message = message;
    state.displayError = true;
  },

  hideError(state) {
    state.displayError = false;
  },
};

export const getters = {
  isErrorShowing(state) {
    return state.displayError;
  },
  errorMessage(state) {
    return state.message;
  },
};

export const actions = {
  showError(context, message) {
    context.commit('showError', message);
  },

  hideError(context) {
    context.commit('hideError');
  },
};
