const express = require("express");
const router = express();

const { Register, Login } = require("../Controller/auth.controller");

router.post("/login", Login);
router.post("/register", Register);

module.exports = router;