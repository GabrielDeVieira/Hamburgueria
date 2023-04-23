import { Router } from "express";
import { CreateTb_FuncionariosController } from "../controller/funcionarioController/createFuncionario";
import { updateFuncionarioController } from "../controller/funcionarioController/updateFuncionario";
import { ReadTb_FuncionariosController } from "../controller/funcionarioController/readFuncionario";
import { deleteFuncionarioController } from "../controller/funcionarioController/deleteFuncionario";

const FuncionarioRoutes = Router()
const createFuncionario = new CreateTb_FuncionariosController();
const readFuncionario = new ReadTb_FuncionariosController();


FuncionarioRoutes.post("/create", createFuncionario.handle );
FuncionarioRoutes.post("/read", readFuncionario.handle);
FuncionarioRoutes.post("/update/:id", updateFuncionarioController);
FuncionarioRoutes.post("/delete/:id", deleteFuncionarioController);



export {FuncionarioRoutes}