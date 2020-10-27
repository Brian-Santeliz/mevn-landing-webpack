const { Router } = require("express");
const {
  suscriptionsGetController,
} = require("../controller/suscriptionsController");

const router = Router();
router.get("/", suscriptionsGetController);
module.exports = router;
