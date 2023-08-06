// import connection of sequelizeconsole
// eslint-disable-next-line @typescript-eslint/no-var-requires
const db = require("../db/db");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { DataTypes } = require("sequelize");

db.sequelize
  .sync({ force: true })
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

db.user.hasMany(db.template1, { foreignkey: "User_ID" });
db.template1.belongsTo(db.user, { foreignkey: "User_ID" });

db.user.hasMany(db.template2, { foreignkey: "User_ID" });
db.template2.belongsTo(db.user, { foreignkey: "User_ID" });

db.user.hasMany(db.template3, { foreignkey: "User_ID" });
db.template3.belongsTo(db.user, { foreignkey: "User_ID" });

db.user.hasMany(db.template4, { foreignkey: "User_Id" });
db.template4.belongsTo(db.user, { foreignkey: "User_Id" });

db.user.hasMany(db.template5, { foreignkey: "User_Id" });
db.template5.belongsTo(db.user, { foreignkey: "User_Id" });

// db.Teacher.hasMany(db.Intake, { foreignkey: "Teacher_Id" });
// db.Intake.belongsTo(db.Teacher, { foreignkey: "Teacher_Id" });

module.exports = db;
