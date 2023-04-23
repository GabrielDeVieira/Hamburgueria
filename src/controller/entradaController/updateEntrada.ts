import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { AtualizandoEntrada } from "../../usecases/entrada/updateEntrada";

export const prisma = new PrismaClient;

export async function updateEntradaController(req: Request, res: Response){
    const {ent_id} = req.params
    const {ent_produto, ent_quantidade, ent_for_id} = req.body
    
    try{
        const atual = await AtualizandoEntrada({ ent_id: Number(ent_id), ent_produto, ent_quantidade, ent_for_id})
    }catch(erros){
        return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Atualização de Entrada"});
        
    }
}
