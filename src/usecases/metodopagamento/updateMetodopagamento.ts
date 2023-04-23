import { PrismaClient, Tb_metodospagamentos } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typeMetodopagamento{
    mpg_metododepagamento:  string
    mpg_id: number
    
  }
  export async function AtualizandoMetodopagamento(input: typeMetodopagamento){
    
        
    const {mpg_id, mpg_metododepagamento } = input
    try{
        const editMetodopagamento = await prisma.tb_metodospagamentos.update({
            where:{mpg_id},
            data:{
                mpg_metododepagamento: mpg_metododepagamento
            }
        });
        return editMetodopagamento;
    }catch(error){
    throw new Error("Erro ao atualizar Metodo do pagamento")
    }
}
