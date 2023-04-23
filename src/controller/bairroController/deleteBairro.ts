import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { DeletandoBairro } from "../../usecases/bairro/deleteBairro";

export const prisma = new PrismaClient;

export async function deleteBairroController(req: Request, res: Response){
    const {bai_id} = req.params
    
    try{
        const atual = await DeletandoBairro({ bai_id: Number(bai_id)})
        res.json(atual)
    }catch(error){
        return res.status(StatusCodes.NOT_FOUND).send({error: "Falha na atuaização de tb_bairros"});
      }
}
