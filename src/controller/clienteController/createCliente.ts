import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { CriandoCliente } from "../../usecases/cliente/createCliente";

export const prisma = new PrismaClient;

export class CreateTb_clientesController{
    async handle(req: Request, res: Response){
        const {cli_nome , cli_celular, cli_email, cli_cpf, cli_logradouro,cli_bai_id} = req.body;
        try{
            if(await prisma.tb_clientes.findUnique({where:{cli_cpf: cli_cpf}})){
                return res.status(StatusCodes.UNAUTHORIZED).send({error:"Cliente já existe"});
                }
                
                const create = new CriandoCliente();

                const tb_clientes = await create.execute({ cli_nome , cli_celular, cli_email, cli_cpf, cli_logradouro,cli_bai_id });
                return res.send({
                    tb_clientes,
                },);

            } catch(err){
                return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Registro de Cliente"});
            }
        
            
        } 
    }
