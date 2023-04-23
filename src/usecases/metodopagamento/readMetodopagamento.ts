import { PrismaClient, Tb_metodospagamentos } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typeMetodopagamento{
    mpg_metododepagamento:  string
    
  }
  export class LendoMetodopagamento{
    async execute(): Promise<Tb_metodospagamentos[]>{
        const ListaMetodopagamento= await prisma.tb_metodospagamentos.findMany({
            
        });

        return ListaMetodopagamento;
    }
  }