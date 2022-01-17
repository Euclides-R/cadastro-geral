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
        payment_date: Sequelize.DATE,
        expected_payment_date: Sequelize.DATE,
        type_expenditure: Sequelize.STRING(100)
      },
      {
        sequelize,
        tableName: "expenditure",
      }
    );

    return this;
  }
}

export default Expenditure;
