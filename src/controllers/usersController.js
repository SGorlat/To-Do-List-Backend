const users = require("../data/users");

exports.getUsers = (req, res) => {
  const { firstname, lastname, email } = users[0];
  return res.status(200).json({ firstname, lastname, email });
};
