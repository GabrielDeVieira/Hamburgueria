import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { AtualizandoBairro } from "../../usecases/bairro/updateBairro";

export const prisma = new PrismaClient;

export async function updateBairroController(req: Request, res: Response){
    const {bai_id} = req.params
    const {bai_bairro} = req.body
    
    try{
        const atual = await AtualizandoBairro({ bai_id: Number(bai_id), bai_bairro})
        res.json(atual)
    }catch(error){
        return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Atualização de Bairro"});
        
    }
}
