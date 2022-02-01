export const state = () => ({
  menuState: '',
});

export const mutations = {
  updateMenuState(state, newMenuState) {
    state.menuState = newMenuState;
  },
};

export const getters = {
  currMenuState(state) {
    return state.menuState;
  },
};

export const actions = {
  updateMenuState(context, newMenuState) {
    context.commit('updateMenuState', newMenuState);
  },
  toggleMenu(context) {
    if (context.getters.currMenuState === '')
      return context.commit('updateMenuState', 'personalise');

    context.commit('updateMenuState', '');
  },
};
