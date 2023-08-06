// const { createResponse } = require("../../utils/responseGenerator");
const db = require("../../models");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../../utils/jwt_token");
const { ErrorLogger } = require("../../utils/logger");
const Template = db.template5;

// console.log(User)

exports.createTemplate = async (req, res) => {
  try {
    const Template = await Template.create(req.body);
    // console.log("data save on database", user);
    res.status(200).send({
      status: "Success",
      message: "Successfully create template",
      data: Template,
    });

    // console.log('UserId', user.User_ID)
  } catch (error) {
    ErrorLogger.error(req.originalUrl + " " + error.message);

    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.getAllTemplate = async (req, res) => {
  try {
    const Template = await Template.findAll();
    // console.log("data save on database", user);
    res.status(200).send({
      status: "Success",
      message: "Successfully got all template",
      data: Template,
    });

    // console.log('UserId', user.User_ID)
  } catch (error) {
    ErrorLogger.error(req.originalUrl + " " + error.message);

    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.updateTemplate = async (req, res) => {
  try {
    const { id } = req.params;

    const [lines1, setLines1] = useState("");
    const [lines2, setLines2] = useState("");
    const [lines3, setLines3] = useState("");
    const [lines4, setLines4] = useState("");
    const [lines5, setLines5] = useState("");
    const [lines6, setLines6] = useState("");
    const [lines7, setLines7] = useState("");
    const [lines8, setLines8] = useState("");
    const [lines9, setLines9] = useState("");
    const [lines10, setLines10] = useState("");
    const [lines11, setLines11] = useState("");
    const [lines12, setLines12] = useState("");
    const [lines13, setLines13] = useState("");
    const [lines14, setLines14] = useState("");
    const [lines15, setLines15] = useState("");
    const [lines16, setLines16] = useState("");

    const data = {
      text1: initial,
      text2: father,
      text3: mother,
      text4: chussan,
      text5: date,
      text6: year,
      text7: kallah,
      text8: reception,
      text9: chupah,
      text10: dinner,
      text11: dancing,
      text12: hall,
      text13: address,
      text14: city,
      text15: chussan1,
      text16: chussan2,
      text17: chussan3,
      text18: chussan4,
      text19: chussan5,
      text20: chussan6,
      text21: grandparent1,
      text22: grandparent2,
      text23: grandparent3,
      text24: grandparent4,
      text25: grandparent5,
      text26: grandparent6,
      text27: lines1,
      text28: lines2,
      text29: lines3,
      text30: lines4,
      text31: lines5,
      text32: lines6,
      text33: lines7,
      text34: lines8,
      text35: lines9,
      text36: lines10,
      text37: lines11,
      text38: lines12,
      text39: lines13,
      text40: lines14,
      text41: lines15,
      text42: lines16,
      text43: lines17,
      text44: lines18,
      text45: lines19,
    };
    const Template = await Template.update(data, {
      where: { id: id },
    });
    // console.log("data save on database", user);
    res.status(200).send({
      status: "Success",
      message: "Successfully got all template",
      data: Template,
    });

    // console.log('UserId', user.User_ID)
  } catch (error) {
    ErrorLogger.error(req.originalUrl + " " + error.message);

    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
