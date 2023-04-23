import { PrismaClient, Tb_itenspedidos } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typeItenspedidos{
    its_quantidade:  number
    its_men_id: number
  
  }
  export class LendoItenspedido{
    async execute(): Promise<Tb_itenspedidos[]>{
        const ListaItenspedido= await prisma.tb_itenspedidos.findMany({
            include:{
               tb_menu:{
                select:{
                    men_nome:true,
                    men_descricao:true,
                    men_preco: true
                }
               }
            }
            
        });

        return ListaItenspedido;
    }
  }
