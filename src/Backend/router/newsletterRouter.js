const { Router } = require("express");
const {
  newsletterGetController,
  newsletterPostController,
} = require("../controller/newsletterController");
const router = Router();

router.get("/", newsletterGetController);
router.post("/", newsletterPostController);
module.exports = router;
