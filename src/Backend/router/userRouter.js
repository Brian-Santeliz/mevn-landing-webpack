const { Router } = require("express");
const { userGetController } = require("../controller/userController");
const router = Router();

router.get("/", userGetController);
router.post("/");
module.exports = router;
