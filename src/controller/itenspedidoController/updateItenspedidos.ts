import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { AtualizandoItenspedido } from "../../usecases/itenspedido/updateItenspedidos";

export const prisma = new PrismaClient;

export async function updateItenspedidoController(req: Request, res: Response){
    const {its_id} = req.params
    const {its_quantidade, its_men_id } = req.body
    
    try{
        const atual = await AtualizandoItenspedido({ its_id: Number(its_id),  its_quantidade, its_men_id })
    }catch(erros){
        return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Atualização de Itenspedidos"});
        
    }
}
