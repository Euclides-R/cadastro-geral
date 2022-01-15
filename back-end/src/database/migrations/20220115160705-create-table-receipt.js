'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("receipt", {
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
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      receipt_date: {
        type: Sequelize.DATE,
        allowNull: false, 
      },
      expected_receipt_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      type_recipe: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("receipt"),
};
