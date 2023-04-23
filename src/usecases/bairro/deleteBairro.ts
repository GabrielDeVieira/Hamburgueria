import { PrismaClient, Tb_bairros } from "@prisma/client";
export const prisma = new PrismaClient()

export interface typeBairro{
    bai_id: number
  
  
  }

  export async function DeletandoBairro(input: typeBairro){
    
        
        const {bai_id} = input
        try{
            const deleteBairro = await prisma.tb_bairros.delete({
                where:{bai_id},
            });
            return deleteBairro;
        }catch(error){
        throw new Error("Erro ao Deletar Bairro")
        }
    }
  