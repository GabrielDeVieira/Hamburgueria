import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { AtualizandoStatuspedido } from "../../usecases/statuspedido/updateStatuspedido";

export const prisma = new PrismaClient;

export async function updateStatuspedidoController(req: Request, res: Response){
    const {spd_id} = req.params
    const {spd_statuspedido} = req.body
    
    try{
        const atual = await AtualizandoStatuspedido({ spd_id: Number(spd_id),spd_statuspedido})
    }catch(erros){
        return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Atualização de Status do pedido"});
        
    }
}
