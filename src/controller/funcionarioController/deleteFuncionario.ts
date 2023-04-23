import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { DeletandoFuncionario } from "../../usecases/funcionario/deleteFuncionario";

export const prisma = new PrismaClient;

export async function deleteFuncionarioController(req: Request, res: Response){
    const {fun_id} = req.params
    
    try{
        const atual = await DeletandoFuncionario({ fun_id: Number(fun_id)})
        res.json(atual)
    }catch(error){
        return res.status(StatusCodes.NOT_FOUND).send({error: "Falha ao deletar Funcionario"});
      }
}
