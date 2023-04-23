import { PrismaClient, Tb_bairros } from "@prisma/client";
export const prisma = new PrismaClient()

export interface typeBairro{
    bai_bairro:  string
  
  }

  export class CriandoBairro{
    async execute({bai_bairro}: typeBairro): Promise<Tb_bairros>{
        const novoBairro = await prisma.tb_bairros.create({
            data:{
                bai_bairro: bai_bairro
            }
        });
        return novoBairro;
    }
  }