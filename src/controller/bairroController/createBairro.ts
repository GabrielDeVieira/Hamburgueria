import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { CriandoBairro } from "../../usecases/bairro/createbairro";

export const prisma = new PrismaClient;

export class CreateTb_bairrosController{
    async handle(req: Request, res: Response){
        const {bai_bairro} = req.body;
        try{
                 
            const create = new CriandoBairro();

            const tb_bairros = await create.execute({ bai_bairro });
            return res.send({
                tb_bairros,
            },);

        } catch(err){
            return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Registro de tb_bairros"});
        }
    
        
            
        } 
    }
