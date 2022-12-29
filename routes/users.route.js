const usersController = require("../controllers/users.controller");
const express = require("express");
const router = express.Router();

router.post("/register", usersController.register);

module.exports = router;
