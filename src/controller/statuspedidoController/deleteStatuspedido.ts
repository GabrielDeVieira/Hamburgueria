import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { DeletandoStatuspedido } from "../../usecases/statuspedido/deleteStatuspedido";

export const prisma = new PrismaClient;

export async function deleteStatuspedidoController(req: Request, res: Response){
    const {spd_id} = req.params
    
    try{
        const atual = await DeletandoStatuspedido({ spd_id: Number(spd_id)})
        res.json(atual)
    }catch(error){
        return res.status(StatusCodes.NOT_FOUND).send({error: "Falha ao deletar Status do pedido"});
      }
}
