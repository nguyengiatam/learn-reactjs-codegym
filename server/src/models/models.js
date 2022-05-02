var DataTypes = require("sequelize").DataTypes;
var _account = require("./account");
const db = require("../config/mysql.config")

function initModels(sequelize) {
  var account = _account(sequelize, DataTypes);


  return {
    account,
  };
}
module.exports = initModels(db)
