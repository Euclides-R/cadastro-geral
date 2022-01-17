// import the model
import Account from "../models/Accounts";
import Expenditure from "../models/Expenditure";
import Receipt from "../models/Receipt";

class AccountsController {
  async store(req, res) {
    try {
      const accs = await Account.create(req.body);
      return res.json(acc);
  } catch (e) {
      return res.status(402).json({error: 'Erro de inserção'});
  }
  }

  async index(req, res) {
    const accs = await Account.findAll({
      attributes: ["id", "value", "financial_instuition"],
      include: [
        {
          model: Expenditure,
          as: "expenditure",
        },
        {
          model: Receipt,
          as: 'receipt'
        }
      ],
      
    });
    return res.json(accs);
  }

  async update(req, res) {
    let acc = await Account.findByPk(req.params.id);
    acc = await acc.update(req.body);
    return res.json(acc);
  }

  async delete(req, res) {
    let acc = await Account.findByPk(req.params.id);
    acc = await acc.destroy(req.body);
    return res.json(acc);
  }

  async show(req, res) {
    let acc = await Account.findAll({
      attributes: ["id", "value", "financial_instuition"],
      include: [
        {
          model: Expenditure,
          as: "expenditure",
        },
      ],
      include: [
        {
          model: Receipt,
          as: "receipt",
        },
      ],
    });
    return res.json(acc);
  }
}

export default new AccountsController();
