import { Router } from "express";
import { CreateTb_pedidosController } from "../controller/pedidosController/createPedido";
import { updatePedidoController } from "../controller/pedidosController/updatePedido";
import { ReadTb_PedidosController } from "../controller/pedidosController/readPedido";
import { deletePedidoController } from "../controller/pedidosController/deletePedido";

const pedidosRoutes = Router()
const createPedidos = new CreateTb_pedidosController();
const readPedidos = new ReadTb_PedidosController();


pedidosRoutes.post("/create", createPedidos.handle );
pedidosRoutes.post("/read", readPedidos.handle);
pedidosRoutes.post("/update/:id", updatePedidoController);
pedidosRoutes.post("/delete/:id", deletePedidoController);



export {pedidosRoutes}