export const state = () => ({
  myUserDetails: null,
  activeUsers: null,
});

export const mutations = {
  updateMyUser(state, myUser) {
    const { name, colour, userID } = myUser;
    state.myUserDetails = {
      name,
      colour,
      userID,
    };
    localStorage.setItem('userDetails', JSON.stringify(state.myUserDetails));
  },
};

export const actions = {
  updateMyUser(context, myUser) {
    context.commit('updateMyUser', myUser);
  },

  checkLocalStorage(context) {
    const userDetails = localStorage.getItem('userDetails');
    if (!userDetails) return false;

    context.commit('updateMyUser', JSON.parse(userDetails));
    return true;
  },
};

export const getters = {
  getMyUserDetails(state) {
    return state.myUserDetails;
  },
};