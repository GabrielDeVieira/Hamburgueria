import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { AtualizandoMenu } from "../../usecases/menu/updateMenu";

export const prisma = new PrismaClient;

export async function updateMenuController(req: Request, res: Response){
    const {men_id} = req.params
    const {men_nome, men_descricao,men_preco} = req.body
    
    try{
        const atual = await AtualizandoMenu({ men_id: Number(men_id), men_nome, men_descricao,men_preco})
    }catch(erros){
        return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Atualização de Menu"});
        
    }
}
