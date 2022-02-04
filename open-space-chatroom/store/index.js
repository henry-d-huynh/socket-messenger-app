export const state = () => ({
  activeUsers: [],
  userMessages: [
    {
      userID: 'test',
      name: 'Someone',
      colour: 'blue',
      messages: [{ text: 'this is a test message', id: 'messageIdTest123' }],
    },
  ],
});

export const mutations = {
  updateActiveUsers(state, activeUsers) {
    state.activeUsers = activeUsers;
  },
  updateMyDetails(state, myDetails) {
    state.userDetails = myDetails;
  },
  userHasUpdated(state, userDetails) {
    const user = state.activeUsers.find(
      (user) => user.userID === userDetails.userID
    );
    if (!user) return;
    user.name = userDetails.name;
    user.colour = userDetails.colour;

    state.userMessages.forEach((userMessage) => {
      if (userMessage.userID !== userDetails.userID) return;

      userMessage.name = user.name;
      userMessage.colour = user.colour;
    });
  },

  addMessage(state, message) {
    const lastUserMessage = state.userMessages[state.userMessages.length - 1];
    if (lastUserMessage && lastUserMessage.userID === message.userID)
      return lastUserMessage.messages.push({
        id: message.id,
        text: message.text,
      });

    const owner = state.activeUsers.find(
      (user) => user.userID === message.userID
    );

    if (!owner) return;

    state.userMessages.push({
      userID: owner.userID,
      name: owner.name,
      colour: owner.colour,
      messages: [{ id: message.id, text: message.text }],
    });
  },
};

export const getters = {
  activeUsers(state) {
    return state.activeUsers;
  },

  activeUsersLength(state) {
    return state.activeUsers.length;
  },

  userMessages(state) {
    return state.userMessages;
  },
};
