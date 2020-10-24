const { Router } = require("express");
const { panelGetController } = require("../controller/panelController");

const router = Router();
router.get("/", panelGetController);

module.exports = router;
