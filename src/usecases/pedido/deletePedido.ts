import { PrismaClient, Tb_pedidos } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typePedido{
   
    ped_id: number
  
  }
  export async function DeletandoPedido(input: typePedido){
    
        
    const {ped_id} = input
    try{
        const deletePedido = await prisma.tb_pedidos.delete({
            where:{ped_id},
        });
        return deletePedido;
    }catch(error){
    throw new Error("Erro ao Deletar Pedido")
    }
}