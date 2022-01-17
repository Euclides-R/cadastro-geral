// import the model
import Expenditure from "../models/Expenditure";

class ExpenditureController {
  async store(req, res) {
    try {
        const expen = await Expenditure.create(req.body);
        return res.json(expen);
    } catch (e) {
        return res.status(402).json({error: 'Erro de inserção'});
    }
  }

  async index(req, res) {
    const expens = await Expenditure.findAll();
    return res.json(expens);
  }

  async update(req, res) {
    let expen = await Expenditure.findByPk(req.params.id);
    expen = await expen.update(req.body);
    return res.json(expen);
  }

  async delete(req, res) {
    let expen = await Expenditure.findByPk(req.params.id);
    expen = await expen.destroy(req.body);
    return res.json(expen);
  }

  async show(req, res) {
    let expen = await Expenditure.findAll(req.params.id);
    return res.json(expen);
  }
}

export default new ExpenditureController();
