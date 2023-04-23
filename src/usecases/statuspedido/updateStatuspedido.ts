import { PrismaClient, Tb_statuspedidos } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typeStatuspedidos{
    spd_statuspedido:  string
    spd_id: number
    
  }
  export async function AtualizandoStatuspedido(input: typeStatuspedidos){
    
        
    const {spd_id, spd_statuspedido  } = input
    try{
        const editStatuspedido = await prisma.tb_statuspedidos.update({
            where:{spd_id},
            data:{
              spd_statuspedido: spd_statuspedido
            }
        });
        return editStatuspedido;
    }catch(error){
    throw new Error("Erro ao atualizar Metodo do pagamento")
    }
}
