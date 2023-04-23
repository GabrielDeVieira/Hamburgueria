import { PrismaClient, Tb_bairros } from "@prisma/client";
export const prisma = new PrismaClient()

export interface typeBairro{
    bai_id: number
    bai_bairro:  string
  
  }

  export async function AtualizandoBairro(input: typeBairro){
    
        
        const {bai_id ,bai_bairro} = input
        
        try{
            const editBairro = await prisma.tb_bairros.update({
                where:{
                    bai_id: Number(bai_id)
                },
                data:{
                    bai_bairro: bai_bairro,
                }
            });
            return editBairro;
        }catch(error){
        throw new Error("Erro ao atualizar Bairro")
        }
    }
  