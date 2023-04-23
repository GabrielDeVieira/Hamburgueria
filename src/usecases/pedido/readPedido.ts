import { PrismaClient, Tb_pedidos } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typePedido{
    ped_spd_id: number
    ped_mpg_id: number
    ped_valortotal: number
    ped_observacao: string
  
  }
  export class LendoPedido{
    async execute(): Promise<Tb_pedidos[]>{
        const ListaPedido= await prisma.tb_pedidos.findMany({
            include:{
                tb_statuspedidos:{
                    select:{
                        spd_statuspedido:true
                    }
                },
                tb_metodospagamentos:{
                    select:{
                        mpg_metododepagamento: true
                    }
                }
            }
            
        });

        return ListaPedido;
    }
  }
