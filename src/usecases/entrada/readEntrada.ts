import { PrismaClient, Tb_entrada } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typeMember{
    ent_produto: string
    ent_quantidade: number
    ent_for_id: number

  }
  export class LendoEntrada{
    async execute(): Promise<Tb_entrada[]>{
        const ListaEntrada= await prisma.tb_entrada.findMany({
            include:{
                tb_fornecedores:{
                    select:{
                        for_nome: true,
                    }
                }
            }
        });

        return ListaEntrada;
    }
  }