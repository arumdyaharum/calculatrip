'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Expense extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Expense.init({
    name: DataTypes.STRING,
    tripId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    expenseCategoryId: DataTypes.INTEGER,
    paymentMethodId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    location: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Expense',
  });
  return Expense;
};