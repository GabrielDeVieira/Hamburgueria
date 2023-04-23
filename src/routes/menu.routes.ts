import { Router } from "express";
import { CreateTb_menuController } from "../controller/menuController/createMenu";
import { updateMenuController } from "../controller/menuController/updateMenu";
import { ReadTb_MenusController } from "../controller/menuController/readMenu";
import { deleteMenuController } from "../controller/menuController/deleteMenu";

const menuRoutes = Router()
const createMenu = new CreateTb_menuController();
const readMenu = new ReadTb_MenusController();


menuRoutes.post("/create", createMenu.handle );
menuRoutes.post("/read", readMenu.handle);
menuRoutes.post("/update/:id", updateMenuController);
menuRoutes.post("/delete/:id", deleteMenuController);



export {menuRoutes}