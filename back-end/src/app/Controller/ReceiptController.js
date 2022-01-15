// import the model
import Receipt from "../models/Receipt";

class ReceiptController {
  async store(req, res) {
    try {
        const receipt = await Receipt.create(req.body);
        return res.json(receipt);
    } catch (e) {
        return res.status(402).json({error: 'Erro de inserção'});
    }
  }

  async index(req, res) {
    const receipts = await Receipt.findAll();
    return res.json(receipts);
  }

  async update(req, res) {
    let receipt = await Receipt.findByPk(req.params.id);
    receipt = await receipt.update(req.body);
    return res.json(receipt);
  }

  async delete(req, res) {
    let receipt = await Receipt.findByPk(req.params.id);
    receipt = await receipt.destroy(req.body);
    return res.json(receipt);
  }

  async show(req, res) {
    let receipt = await Receipt.findAll(req.params.id);
    return res.json(receipt);
  }
}

export default new ReceiptController();
