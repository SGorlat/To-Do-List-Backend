const express = require("express");
const router = express.Router();
const { getUsers } = require("../controllers/usersController");
const { loginUsers } = require("../controllers/loginUsersController");

router.get("/", getUsers);
router.post("/login", loginUsers);

module.exports = router;
