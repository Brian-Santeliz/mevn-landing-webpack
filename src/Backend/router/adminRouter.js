const { Router } = require("express");
const { adminGetController } = require("../controller/adminController");
const router = Router();

router.get("/", adminGetController);
module.exports = router;
