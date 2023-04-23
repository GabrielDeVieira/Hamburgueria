import { Router } from "express";
import { CreateTb_fornecedoresController } from "../controller/fornecedoresController/createFornecedores";
import { updateFornecedorController } from "../controller/fornecedoresController/updateFornecedores";
import { ReadTb_FornecedoresController } from "../controller/fornecedoresController/readFornecedores";
import { deleteFornecedorController } from "../controller/fornecedoresController/deleteFornecedores";

const FornecedorRoutes = Router()
const createFornecedor = new CreateTb_fornecedoresController();
const readFornecedor = new ReadTb_FornecedoresController();


FornecedorRoutes.post("/create", createFornecedor.handle );
FornecedorRoutes.post("/read", readFornecedor.handle);
FornecedorRoutes.post("/update/:id", updateFornecedorController);
FornecedorRoutes.post("/delete/:id", deleteFornecedorController);



export {FornecedorRoutes}