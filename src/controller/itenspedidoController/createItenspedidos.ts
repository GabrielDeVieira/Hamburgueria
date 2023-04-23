import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { CriandoItenspedidos } from "../../usecases/itenspedido/createitenspedido";

export const prisma = new PrismaClient;

export class CreateTb_itenspedidosController{
    async handle(req: Request, res: Response){
        const {its_quantidade, its_men_id} = req.body;
        try{
                 
            const create = new CriandoItenspedidos();

            const tb_itenspedidos = await create.execute({ its_quantidade, its_men_id});
            return res.send({
                tb_itenspedidos,
            },);

        } catch(err){
            return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Registro de Itens pedidos"});
        }
    
        
            
        } 
    }
