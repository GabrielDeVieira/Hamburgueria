import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { LendoCliente } from "../../usecases/cliente/readCliente";

export const prisma = new PrismaClient;

export class ReadTb_ClientesController{
    async handle(req: Request, res: Response){
            
            const read = new LendoCliente();
            const tb_clientes = await read.execute();
            return res.status(201).json(tb_clientes)

       
        
            
        } 
    }


