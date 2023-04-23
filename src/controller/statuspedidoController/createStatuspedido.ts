import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { CriandoStatuspedidos } from "../../usecases/statuspedido/createStatuspedido";

export const prisma = new PrismaClient;

export class CreateTb_statuspedidosController{
    async handle(req: Request, res: Response){
        const {spd_statuspedido} = req.body;
        try{
                 
            const create = new CriandoStatuspedidos();

            const tb_statuspedido = await create.execute({spd_statuspedido});
            return res.send({
                tb_statuspedido,
            },);

        } catch(err){
            return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Registro de Método de Pagamento"});
        }
    
        
            
        } 
    }
