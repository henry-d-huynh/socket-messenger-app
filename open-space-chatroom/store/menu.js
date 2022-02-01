export const state = () => ({
  state: '',
});

export const mutations = {
  updateMenuState(state, newState) {
    state.state = newState;
  },
};

export const getters = {
  currState(state) {
    console.log(state.state);
    return state.state;
  },
};

export const actions = {
  updateState(context, newState) {
    context.commit('updateMenuState', newState);
  },

  toggle(context) {
    if (context.getters.currState === '')
      return context.commit('updateMenuState', 'personalise');

    context.commit('updateMenuState', '');
  },
};
