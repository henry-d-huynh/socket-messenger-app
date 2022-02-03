const validColours = ["blue", "pink", "red", "yellow"];
const error = "user_create_error";

exports.createUser = (socket, userDetails) => {
  const name = userDetails.name.trim();
  const colour = userDetails.colour;
  const agree = userDetails.agree;

  if (!name) return socket.emit(error, "Please enter a display name");

  const specialChars = /^[A-Za-z ]+$/;

  if (!specialChars.test(name))
    return socket.emit(
      error,
      "Display name should not contain numbers or special characters"
    );

  if (name.split(" ").length > 4)
    return socket.emit(error, `Display name can't have more than 3 spaces`);

  if (name.length > 30)
    return socket.emit(
      error,
      `Display name should contain no more than 30 characters`
    );

  if (!validColours.includes(colour))
    return socket.emit(error, "Invalid colour");

  if (!agree) return socket.emit(error, `You must agree that you're 18+`);

  const formattedName = name
    .toLowerCase()
    .split(" ")
    .map((val) => val[0].toUpperCase() + val.slice(1))
    .join(" ");

  const createdUser = {
    formattedName,
    colour,
  };

  socket.emit("user_created", createdUser);
};
