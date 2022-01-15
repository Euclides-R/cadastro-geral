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

routes.get('/account', AccountsController.index);
routes.get('/account/:id', AccountsController.show);
routes.post('/account', AccountsController.store);
routes.put('/account/:id', AccountsController.show);
routes.delete('/account/:id', AccountsController.show);

export default routes;
