import { Router } from "express";
import { CreateTb_EntradaController } from "../controller/entradaController/createEntrada";
import { updateEntradaController } from "../controller/entradaController/updateEntrada";
import { ReadTb_EntradasController } from "../controller/entradaController/readEntrada";
import { deleteEntradaController } from "../controller/entradaController/deleteEntrada";

const EntradaRoutes = Router()
const createEntrada = new CreateTb_EntradaController();
const readEntrada = new ReadTb_EntradasController();


EntradaRoutes.post("/create", createEntrada.handle );
EntradaRoutes.post("/read", readEntrada.handle);
EntradaRoutes.post("/update/:id", updateEntradaController);
EntradaRoutes.post("/delete/:id", deleteEntradaController);



export {EntradaRoutes}