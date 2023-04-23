import { PrismaClient, Tb_entrada } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typeEntrada{
    ent_produto: string
    ent_quantidade: number
    ent_for_id: number

  }

  export class CriandoEntrada{
    async execute({ent_produto, ent_quantidade, ent_for_id }: typeEntrada): Promise<Tb_entrada>{
        const novaEntrada = await prisma.tb_entrada.create({
            data:{
                ent_produto: ent_produto,
                ent_quantidade: ent_quantidade,
                ent_for_id: ent_for_id
            }
        });
        return novaEntrada;
    }
  }
 


