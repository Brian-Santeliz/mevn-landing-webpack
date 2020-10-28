const { Router } = require("express");
const {
  userGetController,
  userPostController,
  userGetAdminController,
  userDeleteAdminController,
} = require("../controller/userController");
const router = Router();

router.get("/", userGetController);
router.post("/", userPostController);
router.get("/admin", userGetAdminController);
router.use("/:id", userDeleteAdminController);
module.exports = router;
