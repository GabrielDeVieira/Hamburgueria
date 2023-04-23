import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { DeletandoCliente } from "../../usecases/cliente/deleteCliente";

export const prisma = new PrismaClient;

export async function deleteClienteController(req: Request, res: Response){
    const {cli_id} = req.params
    
    try{
        const atual = await DeletandoCliente({ cli_id: Number(cli_id)})
        res.json(atual)
    }catch(error){
        return res.status(StatusCodes.NOT_FOUND).send({error: "Falha ao deletar Cliente"});
      }
}
