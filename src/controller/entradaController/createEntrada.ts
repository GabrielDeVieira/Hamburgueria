import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { CriandoEntrada } from "../../usecases/entrada/createEntrada";

export const prisma = new PrismaClient;

export class CreateTb_EntradaController{
    async handle(req: Request, res: Response){
        const {ent_produto, ent_quantidade, ent_for_id } = req.body;
        try{
                 
            const create = new CriandoEntrada();

            const tb_entrada = await create.execute({ ent_produto, ent_quantidade, ent_for_id });
            return res.send({
                tb_entrada,
            },);

        } catch(err){
            return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Registro de Entrada"});
        }
    
        
            
        } 
    }
