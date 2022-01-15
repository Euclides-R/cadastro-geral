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
        type_recipe: Sequelize.STRING(100),
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Account;
