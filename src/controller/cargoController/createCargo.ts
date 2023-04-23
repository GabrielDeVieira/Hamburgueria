import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { CriandoCargos } from "../../usecases/cargos/createCargo";

export const prisma = new PrismaClient;

export class CreateTb_cargosController{
    async handle(req: Request, res: Response){
        const {car_cargo, car_salario} = req.body;
        try{
                 
            const create = new CriandoCargos();

            const tb_cargos = await create.execute({ car_cargo, car_salario});
            return res.send({
                tb_cargos,
            },);

        } catch(err){
            return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Registro de Tb_cargos"});
        }
    
        
            
        } 
    }
