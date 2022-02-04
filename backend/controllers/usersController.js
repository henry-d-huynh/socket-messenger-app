const { v4: randomId } = require("uuid");

const usersModel = require("../models/usersModel");

exports.userDisconnected = usersModel.userDisconnected;

exports.createUser = (userDetails) => {
  const name = userDetails.name.trim();
  const colour = userDetails.colour;
  const agree = userDetails.agree;
  const socketId = userDetails.socketId;
  const id = userDetails.id ? userDetails.id : randomId();

  const nameValidate = usersModel.validateUserName(name);
  if (nameValidate.status !== "ok")
    return {
      success: false,
      message: nameValidate.message,
    };

  const colourValidate = usersModel.validateUserColour(colour);
  if (colourValidate.status !== "ok")
    return {
      success: false,
      message: colourValidate.message,
    };

  if (!agree && !userDetails.id)
    return {
      success: false,
      message: `You must agree that you're 18+`,
    };

  const formattedName = name
    .toLowerCase()
    .split(" ")
    .map((val) => val[0].toUpperCase() + val.slice(1))
    .join(" ");

  const createdUser = {
    name: formattedName,
    colour,
    id,
    socketId,
  };

  usersModel.newActiveUser(createdUser);
  return {
    success: true,
    data: createdUser,
  };
};

exports.getActiveUsers = () => {
  return usersModel.getActiveUsers();
};
