import { PrismaClient, Tb_itenspedidos } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typeItenspedidos{

    its_id: number
  
  }
  export async function DeletandoItenspedido(input: typeItenspedidos){
    
        
    const {its_id} = input
    try{
        const deleteItenspedido = await prisma.tb_itenspedidos.delete({
            where:{its_id},
        });
        return deleteItenspedido;
    }catch(error){
    throw new Error("Erro ao Deletar Itens do pedido")
    }
}