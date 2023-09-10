const router = require("express").Router();
const user = require("./users");
const report = require("./report");
router.use("/user", user);
router.use("/report", report);

module.exports = router;
