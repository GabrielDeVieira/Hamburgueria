import { Router } from "express";
import { CreateTb_clientesController } from "../controller/clienteController/createCliente";
import { updateClienteController } from "../controller/clienteController/updateCliente";
import { ReadTb_ClientesController } from "../controller/clienteController/readCliente";
import { deleteClienteController } from "../controller/clienteController/deleteCliente";

const ClienteRoutes = Router()
const createCliente = new CreateTb_clientesController();
const readCliente = new ReadTb_ClientesController();


ClienteRoutes.post("/create", createCliente.handle );
ClienteRoutes.post("/read", readCliente.handle);
ClienteRoutes.post("/update/:id", updateClienteController);
ClienteRoutes.post("/delete/:id", deleteClienteController);



export {ClienteRoutes}