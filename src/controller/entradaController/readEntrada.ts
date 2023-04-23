import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { LendoEntrada } from "../../usecases/entrada/readEntrada";

export const prisma = new PrismaClient;

export class ReadTb_EntradasController{
    async handle(req: Request, res: Response){
            
            const read = new LendoEntrada();
            const tb_entradas = await read.execute();
            return res.status(201).json(tb_entradas)

       
        
            
        } 
    }


