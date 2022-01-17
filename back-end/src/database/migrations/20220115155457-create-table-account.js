'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("account", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      value: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      financial_instuition: {
        type: Sequelize.STRING(100),
        allowNull:false,
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("account"),
};
