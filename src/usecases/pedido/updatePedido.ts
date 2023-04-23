import { PrismaClient, Tb_pedidos } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typePedido{
    ped_spd_id: number
    ped_mpg_id: number
    ped_valortotal: number
    ped_observacao: string
    ped_id: number
  
  }
  export async function AtualizandoPedido(input: typePedido){
    
        
    const {ped_id, ped_spd_id, ped_mpg_id, ped_valortotal, ped_observacao  } = input
    try{
        const editPedido = await prisma.tb_pedidos.update({
            where:{ped_id},
            data:{
                ped_spd_id: ped_spd_id,
                ped_mpg_id: ped_mpg_id,
                ped_observacao: ped_observacao,
                ped_valortotal: ped_valortotal
            }
        });
        return editPedido;
    }catch(error){
    throw new Error("Erro ao atualizar Metodo do pagamento")
    }
}

