module.exports = {
  activeUsers: [],

  doesUserExist(userID) {
    return this.activeUsers.some((user) => user.userID === userID);
  },
};
