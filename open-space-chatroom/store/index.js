export const state = () => ({
  activeUsers: [
    'Charles',
    'Jacob',
    'Paul Scott',
    'Malcome',
    'Daniel Denial',
    'Justine Belieber',
  ],
});

export const getters = {
  activeUsers(state) {
    return state.activeUsers;
  },
};
