'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("expenditure", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      value: {
        type: Sequelize.DECIMAL,
        allowNull:false,
      },
      payment_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      expected_payment_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      type_expenditure: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("expenditure"),
};
