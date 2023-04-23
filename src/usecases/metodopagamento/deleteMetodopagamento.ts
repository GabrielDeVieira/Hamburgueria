import { PrismaClient, Tb_metodospagamentos } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typeMetodopagamento{
    mpg_id: number
    
  }
  export async function DeletandoMetodopagamento(input: typeMetodopagamento){
    
        
    const {mpg_id} = input
    try{
        const deleteMetodopagamento = await prisma.tb_metodospagamentos.delete({
            where:{mpg_id},
        });
        return deleteMetodopagamento;
    }catch(error){
    throw new Error("Erro ao Deletar Itens do pedido")
    }
}
