// import connection of sequelizeconsole
// eslint-disable-next-line @typescript-eslint/no-var-requires
const db = require("../db/db");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { DataTypes } = require("sequelize");

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Connection re-synced");
  })
  .catch((err) => {
    console.log("Error on re-synced", err);
  });

// eslint-disable-next-line @typescript-eslint/no-var-requires
db.user = require("../models/users/user")(db.sequelize, DataTypes);
db.template1 = require("../models/template1/template1")(
  db.sequelize,
  DataTypes
);
db.template2 = require("../models/template2/template2")(
  db.sequelize,
  DataTypes
);
db.template3 = require("../models/template3/template3")(
  db.sequelize,
  DataTypes
);
db.template4 = require("../models/template4/template4")(
  db.sequelize,
  DataTypes
);
db.template5 = require("../models/template5/template5")(
  db.sequelize,
  DataTypes
);

// db.Course.hasMany(db.Intake, { foreignkey: "Course_Id" });
// db.Intake.belongsTo(db.Course, { foreignkey: "Course_Id" });

// db.Teacher.hasMany(db.Intake, { foreignkey: "Teacher_Id" });
// db.Intake.belongsTo(db.Teacher, { foreignkey: "Teacher_Id" });

module.exports = db;
