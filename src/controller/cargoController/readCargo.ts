import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { LendoCargo } from "../../usecases/cargos/readCargo";

export const prisma = new PrismaClient;

export class ReadTb_CargosController{
    async handle(req: Request, res: Response){
            
            const read = new LendoCargo();
            const tb_cargos = await read.execute();
            return res.status(201).json(tb_cargos)

       
        
            
        } 
    }


