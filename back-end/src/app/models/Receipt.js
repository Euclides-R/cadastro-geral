import Sequelize, { Model } from "sequelize";

class Receipt extends Model {
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
        description: Sequelize.TEXT,
        receipt_date: Sequelize.DATE,
        expected_receipt_date: Sequelize.DATE,
        type_recipe: Sequelize.STRING(100),
      },
      {
        sequelize,
        tableName: "receipt",
      }
    );

    return this;
  }
}

export default Receipt;
