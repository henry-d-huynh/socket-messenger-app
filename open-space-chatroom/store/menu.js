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
    return state.state;
  },

  buttonText(state) {
    if (state.state === 'personalise') return 'View active users';
    if (state.state === 'showActiveUsers') return 'Personalise';

    return 'View Active users';
  },
};

export const actions = {
  updateState(context, newState) {
    context.commit('updateMenuState', newState);
  },

  toggleMenu(context) {
    if (context.getters.currState === '')
      return context.commit('updateMenuState', 'personalise');

    context.commit('updateMenuState', '');
  },

  toggleButton(context) {
    if (context.getters.currState === 'personalise')
      return context.commit('updateMenuState', 'showActiveUsers');
    context.commit('updateMenuState', 'personalise');
  },

  toggleActiveUsers(context) {
    context.commit('updateMenuState', 'showActiveUsers');
  },
};
