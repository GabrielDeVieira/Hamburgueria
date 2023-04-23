
import { PrismaClient, Tb_itenspedidos } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typeItenspedidos{
    its_quantidade:  number
    its_men_id: number
  
  }

  export class CriandoItenspedidos{
    async execute({its_quantidade, its_men_id}: typeItenspedidos): Promise<Tb_itenspedidos>{
        const novoItenspedidos = await prisma.tb_itenspedidos.create({
            data:{
                its_quantidade: its_quantidade,
                its_men_id: its_men_id

            }
        });
        return novoItenspedidos;
    }
  }

