const express = require("express");
const router = express.Router();
const users = require("../controllers/users");

router.post("/create_user", users.createUser);
router.get("/user_details", users.userDetails);

module.exports = router;
