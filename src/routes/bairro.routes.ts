import { Router } from "express";
import { CreateTb_bairrosController } from "../controller/bairroController/createBairro";
import { updateBairroController } from "../controller/bairroController/updateBairro";
import { ReadTb_bairrosController } from "../controller/bairroController/readBairro";
import { deleteBairroController } from "../controller/bairroController/deleteBairro";

const bairroRoutes = Router()
const createBairro = new CreateTb_bairrosController();
const readBairro = new ReadTb_bairrosController();


bairroRoutes.post("/create", createBairro.handle );
bairroRoutes.post("/read", readBairro.handle);
bairroRoutes.post("/update/:id", updateBairroController);
bairroRoutes.post("/delete/:id", deleteBairroController);



export {bairroRoutes}