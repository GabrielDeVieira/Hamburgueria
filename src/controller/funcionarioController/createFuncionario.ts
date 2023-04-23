import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes"
import { CriandoFuncionario } from "../../usecases/funcionario/createFuncionario";

export const prisma = new PrismaClient;

export class CreateTb_FuncionariosController{
    async handle(req: Request, res: Response){
        const {fun_nome , fun_celular, fun_email, fun_cpf, fun_logradouro,fun_bai_id, fun_car_id } = req.body;
        try{
            if(await prisma.tb_funcionarios.findUnique({where:{fun_cpf: fun_cpf}})){
                return res.status(StatusCodes.UNAUTHORIZED).send({error:"Funcionario já existe"});
                }
                
                const create = new CriandoFuncionario();

                const tb_funcionarios = await create.execute({ fun_nome , fun_celular, fun_email, fun_cpf, fun_logradouro,fun_bai_id, fun_car_id  });
                return res.send({
                    tb_funcionarios,
                },);

            } catch(err){
                return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Registro de Funcionario"});
            }
        
            
        } 
    }
