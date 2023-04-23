import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { LendoFuncionario } from "../../usecases/funcionario/readFuncionario";

export const prisma = new PrismaClient;

export class ReadTb_FuncionariosController{
    async handle(req: Request, res: Response){
            
            const read = new LendoFuncionario();
            const tb_funcionarios = await read.execute();
            return res.status(201).json(tb_funcionarios)

       
        
            
        } 
    }


