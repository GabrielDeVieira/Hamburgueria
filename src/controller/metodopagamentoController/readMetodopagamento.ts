import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { LendoMetodopagamento } from "../../usecases/metodopagamento/readMetodopagamento";

export const prisma = new PrismaClient;

export class ReadTb_MetodopagamentosController{
    async handle(req: Request, res: Response){
            
            const read = new LendoMetodopagamento();
            const tb_metodopagamentos = await read.execute();
            return res.status(201).json(tb_metodopagamentos)

       
        
            
        } 
    }


