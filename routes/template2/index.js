const router = require("express").Router();
const template2 = require("../../controllers/template2/template2.controller");
const authorization = require("../../utils/authorization");
const { verifyToken } = require("../../utils/verifyToken");

router.post("/:id", template2.createTemplate);
router.get("/", template2.getSingleTemplate);
// router.get("/", verifyToken, authorization("super_admin"), user.getAllUsers);

// router.get("/", verifyToken, user.getAllUsers);

module.exports = router;
