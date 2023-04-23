import { PrismaClient, Tb_fornecedores } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typeFornecedor{
    for_id: number
  
  }
  export async function DeletandoFornecedor(input: typeFornecedor){
    
        
    const {for_id} = input
    try{
        const deleteFornecedor = await prisma.tb_fornecedores.delete({
            where:{for_id},
        });
        return deleteFornecedor;
    }catch(error){
    throw new Error("Erro ao Deletar Fornecedor")
    }
}