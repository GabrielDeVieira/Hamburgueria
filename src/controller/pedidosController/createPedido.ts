import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { CriandoPedidos} from "../../usecases/pedido/createPedido";

export const prisma = new PrismaClient;

export class CreateTb_pedidosController{
    async handle(req: Request, res: Response){
        const {ped_spd_id, ped_mpg_id, ped_valortotal, ped_observacao} = req.body;
        try{
                 
            const create = new CriandoPedidos();

            const tb_pedidos = await create.execute({ped_spd_id, ped_mpg_id, ped_valortotal, ped_observacao});
            return res.send({
                tb_pedidos,
            },);

        } catch(err){
            return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Registro de Pedido"});
        }
    
        
            
        } 
    }
