const router = require("express").Router();
const template5 = require("../../controllers/template5/template5.controller");
const authorization = require("../../utils/authorization");
const { verifyToken } = require("../../utils/verifyToken");



router.post("/", template5.createTemplate);
router.get("/", template5.getAllTemplate);
// router.get("/", verifyToken, authorization("super_admin"), user.getAllUsers);
router.put("/:id", template5.updateTemplate);
// router.get("/", verifyToken, user.getAllUsers);

module.exports = router;
