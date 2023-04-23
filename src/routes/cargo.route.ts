import { Router } from "express";
import { CreateTb_cargosController } from "../controller/cargoController/createCargo";
import { updateCargoController } from "../controller/cargoController/updateCargo";
import { ReadTb_CargosController } from "../controller/cargoController/readCargo";
import { deleteCargoController } from "../controller/cargoController/deleteCargo";

const CargoRoutes = Router()
const createCargo = new CreateTb_cargosController();
const readCargo = new ReadTb_CargosController();


CargoRoutes.post("/create", createCargo.handle );
CargoRoutes.post("/read", readCargo.handle);
CargoRoutes.post("/update/:id", updateCargoController);
CargoRoutes.post("/delete/:id", deleteCargoController);



export {CargoRoutes}