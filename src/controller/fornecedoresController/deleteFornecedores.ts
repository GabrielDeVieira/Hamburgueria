import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { DeletandoFornecedor } from "../../usecases/fornecedores/deleteFornecedores";

export const prisma = new PrismaClient;

export async function deleteFornecedorController(req: Request, res: Response){
    const {for_id} = req.params
    
    try{
        const atual = await DeletandoFornecedor({ for_id: Number(for_id)})
        res.json(atual)
    }catch(error){
        return res.status(StatusCodes.NOT_FOUND).send({error: "Falha ao deletar Fornecedor"});
      }
}
