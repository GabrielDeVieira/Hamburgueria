import { PrismaClient, Tb_entrada } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typeEntrada{
    ent_produto: string
    ent_quantidade: number
    ent_for_id: number
    ent_id: number

  }
  export async function AtualizandoEntrada(input: typeEntrada){
    
        
    const {ent_id,ent_produto, ent_quantidade, ent_for_id } = input
    try{
        const editEntrada = await prisma.tb_entrada.update({
            where:{ent_id},
            data:{
                ent_produto: ent_produto,
                ent_quantidade: ent_quantidade,
                ent_for_id: ent_for_id
            }
        });
        return editEntrada;
    }catch(error){
    throw new Error("Erro ao atualizar Entrada")
    }
}
