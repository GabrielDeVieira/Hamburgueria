import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { AtualizandoPedido } from "../../usecases/pedido/updatePedido";

export const prisma = new PrismaClient;

export async function updatePedidoController(req: Request, res: Response){
    const {ped_id} = req.params
    const {ped_spd_id, ped_mpg_id, ped_valortotal, ped_observacao} = req.body
    
    try{
        const atual = await AtualizandoPedido({ ped_id: Number(ped_id),ped_spd_id, ped_mpg_id, ped_valortotal, ped_observacao})
    }catch(erros){
        return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Atualização de Pedido"});
        
    }
}
