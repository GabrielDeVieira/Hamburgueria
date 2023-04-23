import { Router } from "express";
import { CreateTb_statuspedidosController } from "../controller/statuspedidoController/createStatuspedido";
import { updateStatuspedidoController } from "../controller/statuspedidoController/updateStatuspedido";
import { ReadTb_StatuspedidosController } from "../controller/statuspedidoController/readStatuspedido";
import { deleteStatuspedidoController } from "../controller/statuspedidoController/deleteStatuspedido";

const statusPedidoRoutes = Router()
const createstatusPedido = new CreateTb_statuspedidosController();
const readstatusPedido = new ReadTb_StatuspedidosController();


statusPedidoRoutes.post("/create", createstatusPedido.handle );
statusPedidoRoutes.post("/read", readstatusPedido.handle);
statusPedidoRoutes.post("/update/:id", updateStatuspedidoController);
statusPedidoRoutes.post("/delete/:id", deleteStatuspedidoController);



export {statusPedidoRoutes}