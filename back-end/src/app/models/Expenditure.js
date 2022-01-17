import Sequelize, { Model } from "sequelize";

class Expenditure extends Model {
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
        description: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        financial_instuition: Sequelize.STRING(100),
        type_recipe: Sequelize.STRING(100),
      },
      {
        sequelize,
        tableName: "expenditure",
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Accounts, {
      foreignKey: 'accounts_id',
      as: 'accounts'
    })
  }
}

export default Expenditure;
