const router = require("express").Router();
const user = require("./users");
const template1 = require("./template1");
const template2 = require("./template2");
const template3 = require("./template3");
const template4 = require("./template4");
const template5 = require("./template5");

router.use("/user", user);
router.use("/template1", template1);
router.use("/template2", template2);
router.use("/template3", template3);
router.use("/template4", template4);
router.use("/template5", template5);

module.exports = router;
