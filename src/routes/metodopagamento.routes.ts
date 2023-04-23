import { Router } from "express";
import { CreateTb_metodopagamentoController } from "../controller/metodopagamentoController/createMetodopagamento";
import { updateMetodopagamentoController } from "../controller/metodopagamentoController/updateMetodopagamento";
import { ReadTb_MetodopagamentosController } from "../controller/metodopagamentoController/readMetodopagamento";
import { deleteMetodopagamentoController } from "../controller/metodopagamentoController/deleteMetodopagamento";

const metodopagamentoRoutes = Router()
const createMetodopagamento = new CreateTb_metodopagamentoController();
const readMetodopagamento = new ReadTb_MetodopagamentosController();


metodopagamentoRoutes.post("/create", createMetodopagamento.handle );
metodopagamentoRoutes.post("/read", readMetodopagamento.handle);
metodopagamentoRoutes.post("/update/:id", updateMetodopagamentoController);
metodopagamentoRoutes.post("/delete/:id", deleteMetodopagamentoController);



export {metodopagamentoRoutes}