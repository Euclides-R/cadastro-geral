import Sequelize, { Model } from "sequelize";

class Account extends Model {
  static init(sequelize) {
    super.init(
      {
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
        financial_instuition: Sequelize.STRING(100),
      },
      {
        sequelize,
        tableName: 'account'
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Receipt, {
      foreignKey: 'receipt_id',
      as: 'receipt'
    })
    this.belongsTo(models.Expenditure, {
      foreignKey: 'expenditure_id',
      as: 'expenditure'
    })
  }
}

export default Account;
