import { PrismaClient, Tb_statuspedidos } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typeStatuspedidos{
    spd_id: number
    
  }
  export async function DeletandoStatuspedido(input: typeStatuspedidos){
    
        
    const {spd_id} = input
    try{
        const deleteStatuspedido = await prisma.tb_statuspedidos.delete({
            where:{spd_id},
        });
        return deleteStatuspedido;
    }catch(error){
    throw new Error("Erro ao Deletar Status de Pedido")
    }
}