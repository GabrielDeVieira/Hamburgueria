import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { LendoStatuspedido } from "../../usecases/statuspedido/readStatuspedido";

export const prisma = new PrismaClient;

export class ReadTb_StatuspedidosController{
    async handle(req: Request, res: Response){
            
            const read = new LendoStatuspedido();
            const tb_statuspedidos = await read.execute();
            return res.status(201).json(tb_statuspedidos)

       
        
            
        } 
    }


