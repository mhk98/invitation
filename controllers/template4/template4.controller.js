// const { createResponse } = require("../../utils/responseGenerator");
const db = require("../../models");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../../utils/jwt_token");
const { ErrorLogger } = require("../../utils/logger");
const Template = db.template4;

// console.log(User)

exports.createTemplate = async (req, res) => {
  try {
    console.log("createTemplate", req.body);
    const {
      initial,
      father,
      mother,
      chussan,
      date,
      year,
      kallah,
      reception,
      chupah,
      dinner,
      dancing,
      hall,
      address,
      city,
      chussan1,
      chussan2,
      chussan3,
      chussan4,
      chussan5,
      chussan6,
      grandparent1,
      grandparent2,
      grandparent3,
      grandparent4,
      grandparent5,
      grandparent6,
      lines1,
      lines2,
      lines3,
      lines4,
      lines5,
      lines6,
      lines7,
      lines8,
      lines9,
      lines10,
      lines11,
      lines12,
      lines13,
      lines14,
      lines15,
      lines16,
      lines17,
      lines18,
      lines19,
    } = req.body;
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
    const result = await Template.create(data);
    // console.log("data save on database", user);
    res.status(200).send({
      status: "Success",
      message: "Successfully create template",
      data: result,
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
exports.getSingleTemplate = async (req, res) => {
  try {
    const { id } = req.params;
    const Template = await Template.findOne({
      where: { id: id },
    });
    // console.log("data save on database", user);
    res.status(200).send({
      status: "Success",
      message: "Successfully got single template",
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
