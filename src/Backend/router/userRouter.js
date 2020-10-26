const { Router } = require("express");
const {
  userGetController,
  userPostController,
} = require("../controller/userController");
const router = Router();

router.get("/", userGetController);
router.post("/", userPostController);
module.exports = router;
