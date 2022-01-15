'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn("account", "expenditure_id", {
    type: Sequelize.INTEGER,
    references: { model: 'expenditure', key: 'id'},
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    allowNull: true
  }),
 
  down: (queryInterface)=> queryInterface.removeColumn("account", "expenditure_id"),
};
