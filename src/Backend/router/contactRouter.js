const { Router } = require("express");
const {
  contactGetController,
  contactPostController,
} = require("../controller/contactController");

const router = Router();

router.get("/", contactGetController);
router.post("/", contactPostController);

module.exports = router;
