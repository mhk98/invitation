const router = require("express").Router();
const report = require("../../controllers/report/report.controller");
const auth = require("../../middlewares/auth");

router.get("/", report.getAllReport);
router.post("/create-report", auth("admin"), report.createReport);
router.delete("/:id", auth("admin"), report.deleteReport);
router.put("/:id", auth("admin"), report.updateReport);

module.exports = router;
