const { Model, DataTypes } = require("sequelize");
const sequelize = require("./seq");

class Mywork extends Model {}

Mywork.init(
  {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "office",
  }
);

module.exports = Mywork;
