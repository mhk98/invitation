const router = require("express").Router();
const template4 = require("../../controllers/template4/template4.controller");
const authorization = require("../../utils/authorization");
const { verifyToken } = require("../../utils/verifyToken");

router.post("/:id", template4.createTemplate);
router.get("/", template4.getSingleTemplate);
// router.get("/", verifyToken, authorization("super_admin"), user.getAllUsers);

// router.get("/", verifyToken, user.getAllUsers);

module.exports = router;
