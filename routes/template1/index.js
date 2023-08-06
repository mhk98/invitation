const router = require("express").Router();
const template1 = require("../../controllers/template1/template1.controller");
const authorization = require("../../utils/authorization");
const { verifyToken } = require("../../utils/verifyToken");



router.post("/:id", template1.createTemplate);
router.get("/", template1.getAllTemplate);
// router.get("/", verifyToken, authorization("super_admin"), user.getAllUsers);
router.put("/:id", template1.updateTemplate);
// router.get("/", verifyToken, user.getAllUsers);

module.exports = router;
