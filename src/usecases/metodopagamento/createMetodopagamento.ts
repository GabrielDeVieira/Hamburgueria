import { PrismaClient, Tb_metodospagamentos } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typeMetodopagamento{
    mpg_metododepagamento:  string
    
  }

  export class CriandoMetodospagamentos{
    async execute({mpg_metododepagamento}: typeMetodopagamento): Promise<Tb_metodospagamentos>{
        const novometodospagamentos= await prisma.tb_metodospagamentos.create({
            data:{
                mpg_metododepagamento: mpg_metododepagamento
            }
        });
        return novometodospagamentos
    }
  }
