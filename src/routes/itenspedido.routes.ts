import { Router } from "express";
import { CreateTb_itenspedidosController } from "../controller/itenspedidoController/createItenspedidos";
import { updateItenspedidoController } from "../controller/itenspedidoController/updateItenspedidos";
import { ReadTb_ItenspedidosController } from "../controller/itenspedidoController/readItenspedidos";
import { deleteItenspedidoController } from "../controller/itenspedidoController/deleteItenspedidos";

const ItenspedidoRoutes = Router()
const createItenspedido = new CreateTb_itenspedidosController();
const readItenspedido = new ReadTb_ItenspedidosController();


ItenspedidoRoutes.post("/create", createItenspedido.handle );
ItenspedidoRoutes.post("/read", readItenspedido.handle);
ItenspedidoRoutes.post("/update/:id", updateItenspedidoController);
ItenspedidoRoutes.post("/delete/:id", deleteItenspedidoController);



export {ItenspedidoRoutes}