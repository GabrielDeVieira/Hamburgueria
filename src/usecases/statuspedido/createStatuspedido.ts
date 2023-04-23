import { PrismaClient, Tb_statuspedidos } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typeStatuspedidos{
    spd_statuspedido:  string
    
  }

  export class CriandoStatuspedidos{
    async execute({spd_statuspedido}: typeStatuspedidos): Promise<Tb_statuspedidos>{
        const novoStatuspedido= await prisma.tb_statuspedidos.create({
            data:{
                spd_statuspedido: spd_statuspedido
            }
        });
        return novoStatuspedido
    }
  }
