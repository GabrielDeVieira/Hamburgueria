import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { AtualizandoFornecedor } from "../../usecases/fornecedores/updateFornecedores";

export const prisma = new PrismaClient;

export async function updateFornecedorController(req: Request, res: Response){
    const {for_id} = req.params
    const { for_nome , for_celular, for_email, for_cnpj, for_cep, for_website } = req.body
    
    try{
        const atual = await AtualizandoFornecedor({ for_id: Number(for_id),  for_nome , for_celular, for_email, for_cnpj, for_cep, for_website })
    }catch(erros){
        return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Atualização de Fornecedores"});
        
    }
}
