import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { AtualizandoCliente } from "../../usecases/cliente/updateCliente";

export const prisma = new PrismaClient;

export async function updateClienteController(req: Request, res: Response){
    const {cli_id} = req.params
    const {cli_nome , cli_celular, cli_email, cli_cpf, cli_logradouro,cli_bai_id} = req.body
    
    try{
        const atual = await AtualizandoCliente({ cli_id: Number(cli_id), cli_nome , cli_celular, cli_email, cli_cpf, cli_logradouro,cli_bai_id})
    }catch(erros){
        return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Atualização de Cliente"});
        
    }
}
