import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { DeletandoPedido } from "../../usecases/pedido/deletePedido";

export const prisma = new PrismaClient;

export async function deletePedidoController(req: Request, res: Response){
    const {ped_id} = req.params
    
    try{
        const atual = await DeletandoPedido({ ped_id: Number(ped_id)})
        res.json(atual)
    }catch(error){
        return res.status(StatusCodes.NOT_FOUND).send({error: "Falha ao deletar Pedido"});
      }
}
