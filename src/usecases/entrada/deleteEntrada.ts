import { PrismaClient, Tb_entrada } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typeEntrada{
    ent_id: number

  }
  export async function DeletandoEntrada(input: typeEntrada){
    
        
    const {ent_id} = input
    try{
        const deleteEntrada = await prisma.tb_entrada.delete({
            where:{ent_id},
        });
        return deleteEntrada;
    }catch(error){
    throw new Error("Erro ao Deletar Entrada")
    }
}