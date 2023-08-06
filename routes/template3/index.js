const router = require("express").Router();
const template3 = require("../../controllers/template3/template3.controller");
const authorization = require("../../utils/authorization");
const { verifyToken } = require("../../utils/verifyToken");



router.post("/", template3.createTemplate);
router.get("/", template3.getAllTemplate);
// router.get("/", verifyToken, authorization("super_admin"), user.getAllUsers);
router.put("/:id", template3.updateTemplate);
// router.get("/", verifyToken, user.getAllUsers);

module.exports = router;
