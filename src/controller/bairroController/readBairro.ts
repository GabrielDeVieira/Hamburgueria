import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { LendoBairro } from "../../usecases/bairro/readBairro";

export const prisma = new PrismaClient;

export class ReadTb_bairrosController{
    async handle(req: Request, res: Response){
        
                 
            const read = new LendoBairro();
            const tb_bairros = await read.execute();
            return res.status(201).json(tb_bairros)

       
    
        
            
        } 
    }


