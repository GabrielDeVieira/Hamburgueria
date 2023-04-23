import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { DeletandoItenspedido } from "../../usecases/itenspedido/deleteItenspedidos";

export const prisma = new PrismaClient;

export async function deleteItenspedidoController(req: Request, res: Response){
    const {its_id} = req.params
    
    try{
        const atual = await DeletandoItenspedido({ its_id: Number(its_id)})
        res.json(atual)
    }catch(error){
        return res.status(StatusCodes.NOT_FOUND).send({error: "Falha ao deletar Itens pedidos"});
      }
}
