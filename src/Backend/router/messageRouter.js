const { Router } = require("express");
const { messageGetController } = require("../controller/messageController");

const router = Router();

router.get("/", messageGetController);

module.exports = router;
