const { Router } = require("express");
const { authPostController } = require("../controller/authController");

const router = Router();

router.post("/", authPostController);

module.exports = router;
