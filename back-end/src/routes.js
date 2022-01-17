import { Router } from "express";
import AccountsController from "./app/Controller/AccountsController";
import ExpenditureController from "./app/Controller/ExpenditureController";
import ReceiptController from "./app/Controller/ReceiptController";
const routes = Router();

routes.get('/',function( req, res ){
    return res.json({
        ok:true
    })
})

routes.get('/accounts', AccountsController.index);
routes.get('/accounts-show/:id', AccountsController.show);
routes.post('/register-acc', AccountsController.store);
routes.put('/acc-edit/:id', AccountsController.show);
routes.delete('/account/:id', AccountsController.show);

routes.get('/expenditure', ExpenditureController.index);
routes.get('/expenditure-show/:id', ExpenditureController.show);
routes.post('/register-expenditure', ExpenditureController.store);
routes.put('/expenditure/:id', ExpenditureController.show);

routes.get('/receipt', ReceiptController.index);
routes.get('/receipt-show/:id', ReceiptController.show);
routes.post('/register-receipt', ReceiptController.store);
routes.put('/receipt-edit/:id', ReceiptController.show);
routes.delete('/receipt/:id', ReceiptController.show);

export default routes;
