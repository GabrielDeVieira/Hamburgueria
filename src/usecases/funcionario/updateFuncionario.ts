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
    fun_id: number    
  
  }
  export async function AtualizandoFuncionario(input: typeFuncionario){
    
        
    const {fun_id, fun_nome , fun_celular, fun_email, fun_cpf, fun_logradouro,fun_bai_id, fun_car_id } = input
    try{
        const editFuncionario = await prisma.tb_funcionarios.update({
            where:{fun_id},
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
        return editFuncionario;
    }catch(error){
    throw new Error("Erro ao atualizar Funcionario")
    }
}

