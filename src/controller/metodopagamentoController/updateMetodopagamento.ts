import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { AtualizandoMetodopagamento } from "../../usecases/metodopagamento/updateMetodopagamento";

export const prisma = new PrismaClient;

export async function updateMetodopagamentoController(req: Request, res: Response){
    const {mpg_id} = req.params
    const {mpg_metododepagamento} = req.body
    
    try{
        const atual = await AtualizandoMetodopagamento({ mpg_id: Number(mpg_id),mpg_metododepagamento})
    }catch(erros){
        return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Atualização de Metodo pagamento"});
        
    }
}
