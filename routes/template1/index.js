const router = require("express").Router();
const template1 = require("../../controllers/template1/template1.controller");
const authorization = require("../../utils/authorization");
const { verifyToken } = require("../../utils/verifyToken");

router.post("/", template1.createTemplate);
router.get("/:id", template1.getSingleTemplate);
// router.get("/", verifyToken, authorization("super_admin"), user.getAllUsers);

// router.get("/", verifyToken, user.getAllUsers);

module.exports = router;
