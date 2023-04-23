import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { AtualizandoFuncionario } from "../../usecases/funcionario/updateFuncionario";

export const prisma = new PrismaClient;

export async function updateFuncionarioController(req: Request, res: Response){
    const {fun_id} = req.params
    const { fun_nome , fun_celular, fun_email, fun_cpf, fun_logradouro,fun_bai_id, fun_car_id } = req.body
    
    try{
        const atual = await AtualizandoFuncionario({ fun_id: Number(fun_id),  fun_nome , fun_celular, fun_email, fun_cpf, fun_logradouro,fun_bai_id, fun_car_id })
    }catch(erros){
        return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Atualização de Funcionarios"});
        
    }
}
