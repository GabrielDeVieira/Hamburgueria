import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { DeletandoMetodopagamento } from "../../usecases/metodopagamento/deleteMetodopagamento";

export const prisma = new PrismaClient;

export async function deleteMetodopagamentoController(req: Request, res: Response){
    const {mpg_id} = req.params
    
    try{
        const atual = await DeletandoMetodopagamento({ mpg_id: Number(mpg_id)})
        res.json(atual)
    }catch(error){
        return res.status(StatusCodes.NOT_FOUND).send({error: "Falha ao deletar Metodo pagamento"});
      }
}
