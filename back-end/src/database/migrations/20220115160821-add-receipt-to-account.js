'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn("account", "receipt_id", {
    type: Sequelize.INTEGER,
    references: { model: 'receipt', key: 'id'},
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    allowNull: true
  }),
 
  down: (queryInterface)=> queryInterface.removeColumn("account", "receipt_id"),
};
