import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { AtualizandoCargo } from "../../usecases/cargos/updateCargo";

export const prisma = new PrismaClient;

export async function updateCargoController(req: Request, res: Response){
    const {car_id} = req.params
    const {car_cargo, car_salario} = req.body
    
    try{
        const atual = await AtualizandoCargo({ car_id: Number(car_id), car_cargo, car_salario})
    }catch(erros){
        return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Atualização de Cargo"});
        
    }
}
