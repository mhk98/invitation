const router = require("express").Router();
const template5 = require("../../controllers/template5/template5.controller");
const authorization = require("../../utils/authorization");
const { verifyToken } = require("../../utils/verifyToken");

router.post("/:id", template5.createTemplate);
router.get("/", template5.getSingleTemplate);
// router.get("/", verifyToken, authorization("super_admin"), user.getAllUsers);

// router.get("/", verifyToken, user.getAllUsers);

module.exports = router;
