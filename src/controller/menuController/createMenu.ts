import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { CriandoMenu } from "../../usecases/menu/createMenu";

export const prisma = new PrismaClient;

export class CreateTb_menuController{
    async handle(req: Request, res: Response){
        const {men_nome, men_descricao,men_preco} = req.body;
        try{
                 
            const create = new CriandoMenu();

            const tb_menu = await create.execute({men_nome, men_descricao,men_preco});
            return res.send({
                tb_menu,
            },);

        } catch(err){
            return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Registro de Menu"});
        }
    
        
            
        } 
    }
