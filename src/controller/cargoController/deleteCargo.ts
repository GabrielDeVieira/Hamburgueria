import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { DeletandoCargo } from "../../usecases/cargos/deleteCargo";

export const prisma = new PrismaClient;

export async function deleteCargoController(req: Request, res: Response){
    const {car_id} = req.params
    
    try{
        const atual = await DeletandoCargo({ car_id: Number(car_id)})
        res.json(atual)
    }catch(error){
        return res.status(StatusCodes.NOT_FOUND).send({error: "Falha ao deletar Cargo"});
      }
}
