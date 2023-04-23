import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { LendoMenu } from "../../usecases/menu/readMenu";

export const prisma = new PrismaClient;

export class ReadTb_MenusController{
    async handle(req: Request, res: Response){
            
            const read = new LendoMenu();
            const tb_menus = await read.execute();
            return res.status(201).json(tb_menus)

       
        
            
        } 
    }


