const { Router } = require("express");
const router = Router();
const controller = require("../controllers/contactController");
router.get("/", controller.getController);
router.post("/", controller.postController);
module.exports = router;
