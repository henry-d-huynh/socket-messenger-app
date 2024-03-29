const { v4: randomID } = require("uuid");
const helper = require("../helper");

class View {
  constructor(io, socket, state) {
    this._io = io;
    this._socket = socket;
    this._state = state;
  }

  _emitUserCreateError(message) {
    console.error(new Error("Something went wrong"));
    this._socket.emit("user_create_error", message);
  }

  _addUser(userDetails) {
    this._socket.emit("verified", userDetails);

    // Don't add if user already exists within the state
    if (this._state.doesUserExist(userDetails.userID))
      return this._state.activeUsers
        .find((user) => user.userID === userDetails.userID)
        .sockets.push(this._socket.id);

    userDetails.sockets.push(this._socket.id);
    this._state.activeUsers.push(userDetails);
    this._io.emit("active_users", this._state.activeUsers);
  }

  createUser(userDetails) {
    const name = userDetails.name.trim();
    const colour = userDetails.colour;
    const agree = userDetails.agree;
    const userID = userDetails.userID ? userDetails.userID : randomID();

    const nameValidator = helper.validateName(name);
    if (!nameValidator.success)
      return this._emitUserCreateError(nameValidator.message);

    const colourValidator = helper.validateColour(colour);
    if (!colourValidator.success)
      return this._emitUserCreateError(colourValidator.message);

    if (!agree && !userDetails.id)
      return this._emitUserCreateError(`You must agree that you're 18+`);

    const formattedName = name
      .toLowerCase()
      .split(" ")
      .map((val) => val[0].toUpperCase() + val.slice(1))
      .join(" ");

    const createdUser = {
      name: formattedName,
      colour,
      userID,
      sockets: [],
    };

    this._addUser(createdUser);
  }

  modifyUser(userDetails) {
    console.log(userDetails);
    const name = userDetails.name.trim();
    const colour = userDetails.colour;
    const userID = userDetails.userID;

    if (!userID)
      return this._emitUserCreateError(
        `You don't exist, try refreshing your browser and try again`
      );

    const nameValidator = helper.validateName(name);
    if (!nameValidator.success)
      return this._emitUserCreateError(nameValidator.message);

    const colourValidator = helper.validateColour(colour);
    if (!colourValidator.success)
      return this._emitUserCreateError(colourValidator.message);

    const formattedName = name
      .toLowerCase()
      .split(" ")
      .map((val) => val[0].toUpperCase() + val.slice(1))
      .join(" ");

    const user = this._state.activeUsers.find((user) => user.userID === userID);

    if (!user)
      return this._emitUserCreateError(
        `You don't exist, try refreshing your browser and try again`
      );

    user.name = formattedName;
    user.colour = colour;

    this._socket.emit("user_update_success", user);
    this._io.emit("user_updated", user);
  }

  removeUser() {
    const connectedSockets = [...this._io.sockets.sockets].map((s) => s[0]);

    this._state.activeUsers = this._state.activeUsers.filter((user) =>
      user.sockets.some((socket) => connectedSockets.includes(socket))
    );

    this._io.emit("active_users", this._state.activeUsers);
  }
}

module.exports = View;
