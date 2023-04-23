import { PrismaClient, Tb_funcionarios } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typeFuncionario{
    fun_nome: string
    fun_celular:   string
    fun_email:      string
    fun_cpf:        string
    fun_logradouro: string
    fun_bai_id:   number
    fun_car_id: number
    
  
  }

  export class CriandoFuncionario{
    async execute({fun_nome , fun_celular, fun_email, fun_cpf, fun_logradouro,fun_bai_id, fun_car_id  }: typeFuncionario): Promise<Tb_funcionarios>{
        const novoFuncionario = await prisma.tb_funcionarios.create({
            data:{
                fun_nome: fun_nome,
                fun_celular: fun_celular,
                fun_email: fun_email,
                fun_cpf: fun_cpf,
                fun_logradouro: fun_logradouro,
                fun_bai_id: fun_bai_id,
                fun_car_id: fun_car_id
            }
        });
        return novoFuncionario;
    }
  }

 