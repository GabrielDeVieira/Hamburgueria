import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { LendoPedido } from "../../usecases/pedido/readPedido";

export const prisma = new PrismaClient;

export class ReadTb_PedidosController{
    async handle(req: Request, res: Response){
            
            const read = new LendoPedido();
            const tb_pedidos = await read.execute();
            return res.status(201).json(tb_pedidos)

       
        
            
        } 
    }


