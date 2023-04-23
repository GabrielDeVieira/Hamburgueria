import { PrismaClient, Tb_pedidos } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typePedido{
    ped_spd_id: number
    ped_mpg_id: number
    ped_valortotal: number
    ped_observacao: string
  
  }

  export class CriandoPedidos{
    async execute({ped_spd_id, ped_mpg_id, ped_valortotal, ped_observacao }: typePedido): Promise<Tb_pedidos>{
        const novoPedidos= await prisma.tb_pedidos.create({
            data:{

                ped_spd_id: ped_spd_id,
                ped_mpg_id: ped_mpg_id,
                ped_observacao: ped_observacao,
                ped_valortotal: ped_valortotal
            }
        });
        return novoPedidos
    }
  }



