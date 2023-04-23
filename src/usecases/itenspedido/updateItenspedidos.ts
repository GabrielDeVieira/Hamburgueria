import { PrismaClient, Tb_itenspedidos } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typeItenspedidos{
    its_quantidade:  number
    its_men_id: number
    its_id: number
  
  }
  export async function AtualizandoItenspedido(input: typeItenspedidos){
    
        
    const {its_id, its_quantidade, its_men_id } = input
    try{
        const editItenspedido = await prisma.tb_itenspedidos.update({
            where:{its_id},
            data:{
                its_quantidade: its_quantidade,
                its_men_id: its_men_id
            }
        });
        return editItenspedido;
    }catch(error){
    throw new Error("Erro ao atualizar Itens do pedido")
    }
}
