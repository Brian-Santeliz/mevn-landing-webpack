const { Router } = require("express");
const { logoutGetController } = require("../controller/logoutController");
const router = Router();
router.get("/", logoutGetController);
module.exports = router;
