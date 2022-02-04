const validColours = ["blue", "pink", "red", "yellow"];

const generateResult = (success, message = "") => ({
  success,
  message,
});

exports.validateColour = (colour) => {
  if (!validColours.includes(colour))
    return generateResult(false, `Colour is invalid`);

  return generateResult(true);
};

exports.validateName = (name) => {
  if (!name) return generateResult(false, "Please enter a display name");

  const specialChars = /^[A-Za-z ]+$/;

  if (!specialChars.test(name))
    return generateResult(
      false,
      "Display name should not contain numbers or special characters"
    );

  if (name.split(" ").length > 4)
    return generateResult(false, `Display name can't have more than 3 spaces`);

  if (name.length > 30)
    return generateResult(
      false,
      `Display name should contain no more than 30 characters`
    );

  return generateResult(true);
};
