const { Router } = require("express");
const {
  servicesGetController,
  servicesPostController,
} = require("../controller/servicesController");

const router = Router();
router.get("/", servicesGetController);
router.post("/", servicesPostController);

module.exports = router;
