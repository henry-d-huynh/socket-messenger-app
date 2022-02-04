const { v4: randomID } = require("uuid");

class View {
  constructor(io, socket, state) {
    this._io = io;
    this._socket = socket;
    this._state = state;
  }

  sendMessage(message) {
    if (!this._state.activeUsers.some((user) => user.userID === message.userID))
      return this._socket.emit(
        "user_create_error",
        "Your ID does not exist, please try refreshing your browser"
      );

    if (!message || !message.text) return;

    message.id = randomID();
    message.text = message.text.trim();

    this._io.emit("message_receive", message);
  }
}

module.exports = View;
