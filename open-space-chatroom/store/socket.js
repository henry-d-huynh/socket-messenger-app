export const state = () => ({
  connected: false,
  verified: false,
});

export const mutations = {
  updateConnected(state, payload) {
    state.connected = payload;
  },

  updateVerify(state, payload) {
    state.verified = payload;
  },
};

export const actions = {
  socketConnected(context) {
    context.commit('updateConnected', true);
  },
  socketDisconnected(context) {
    context.commit('updateConnected', false);
  },
  userVerified(context) {
    context.commit('updateVerify', true);
  },
  userNotVerified(context) {
    context.commit('updateVerify', false);
  },
};

export const getters = {
  isConnected(state) {
    return state.connected;
  },
  isVerified(state) {
    return state.verified;
  },
};
