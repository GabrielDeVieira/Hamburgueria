import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { CriandoMetodospagamentos } from "../../usecases/metodopagamento/createMetodopagamento";

export const prisma = new PrismaClient;

export class CreateTb_metodopagamentoController{
    async handle(req: Request, res: Response){
        const {mpg_metododepagamento} = req.body;
        try{
                 
            const create = new CriandoMetodospagamentos();

            const tb_metododepagamento = await create.execute({mpg_metododepagamento});
            return res.send({
                tb_metododepagamento,
            },);

        } catch(err){
            return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Registro de Método de Pagamento"});
        }
    
        
            
        } 
    }
