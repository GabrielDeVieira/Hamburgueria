import { PrismaClient, Tb_funcionarios } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typeFuncionario{
    fun_id: number    
  
  }
  export async function DeletandoFuncionario(input: typeFuncionario){
    
        
    const {fun_id} = input
    try{
        const deleteFuncionario = await prisma.tb_funcionarios.delete({
            where:{fun_id},
        });
        return deleteFuncionario;
    }catch(error){
    throw new Error("Erro ao Deletar Funcionario")
    }
}