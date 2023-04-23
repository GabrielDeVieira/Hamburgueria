import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { DeletandoEntrada } from "../../usecases/entrada/deleteEntrada";

export const prisma = new PrismaClient;

export async function deleteEntradaController(req: Request, res: Response){
    const {ent_id} = req.params
    
    try{
        const atual = await DeletandoEntrada({ ent_id: Number(ent_id)})
        res.json(atual)
    }catch(error){
        return res.status(StatusCodes.NOT_FOUND).send({error: "Falha ao deletar Entrada"});
      }
}
