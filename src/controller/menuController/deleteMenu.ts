import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { DeletandoMenu } from "../../usecases/menu/deleteMenu";

export const prisma = new PrismaClient;

export async function deleteMenuController(req: Request, res: Response){
    const {men_id} = req.params
    
    try{
        const atual = await DeletandoMenu({ men_id: Number(men_id)})
        res.json(atual)
    }catch(error){
        return res.status(StatusCodes.NOT_FOUND).send({error: "Falha ao deletar Menu"});
      }
}
