import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { LendoFornecedor } from "../../usecases/fornecedores/readFornecedores";

export const prisma = new PrismaClient;

export class ReadTb_FornecedoresController{
    async handle(req: Request, res: Response){
            
            const read = new LendoFornecedor();
            const tb_fornecedores = await read.execute();
            return res.status(201).json(tb_fornecedores)

       
        
            
        } 
    }


