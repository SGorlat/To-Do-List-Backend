const users = require("../data/users");

exports.loginUsers = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ msg: `Missing parameters: ${email} or ${password}` });
  }
  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(404).json({ msg: "User not found" });
  }

  if (user.password !== password) {
    return res.status(403).json({ msg: "Forbidden" });
  }

  return res.status(200).json({ msg: "Login successful" });
};
