const router = require("express").Router();
const template4 = require("../../controllers/template4/template4.controller");
const authorization = require("../../utils/authorization");
const { verifyToken } = require("../../utils/verifyToken");



router.post("/", template4.createTemplate);
router.get("/", template4.getAllTemplate);
// router.get("/", verifyToken, authorization("super_admin"), user.getAllUsers);
router.put("/:id", template4.updateTemplate);
// router.get("/", verifyToken, user.getAllUsers);

module.exports = router;
