const express = require("express");
const managerController = require("../controllers/manager.controller");
const router = express.Router();

router.get("/login", managerController.login);
router.get("/", managerController.get);
router.post("/register", managerController.register);


module.exports = router;
