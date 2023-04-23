import { PrismaClient, Tb_bairros } from "@prisma/client";
export const prisma = new PrismaClient()

export interface typeBairro{
    bai_bairro:  string
  
  }

  export class LendoBairro{
    async execute(): Promise<Tb_bairros[]>{
        const ListaBairro= await prisma.tb_bairros.findMany({
        });

        return ListaBairro;
    }
  }