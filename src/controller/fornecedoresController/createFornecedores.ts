import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { CriandoFornecedor } from "../../usecases/fornecedores/createFornecedore";

export const prisma = new PrismaClient;

export class CreateTb_fornecedoresController{
    async handle(req: Request, res: Response){
        const {for_nome , for_celular, for_email, for_cnpj, for_cep, for_website} = req.body;
        try{
            if(await prisma.tb_fornecedores.findUnique({where:{for_cnpj: for_cnpj}})){
                return res.status(StatusCodes.UNAUTHORIZED).send({error:"Cliente já existe"});
                }
                
                const create = new CriandoFornecedor();

                const tb_fornecedores = await create.execute({ for_nome , for_celular, for_email, for_cnpj, for_cep, for_website });
                return res.send({
                    tb_fornecedores,
                },);

            } catch(err){
                return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Registro de Fornecedores"});
            }
        
            
        } 
    }
