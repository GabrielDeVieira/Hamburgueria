import { PrismaClient, Tb_statuspedidos } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typeStatuspedidos{
    spd_statuspedido:  string
    
  }
  export class LendoStatuspedido{
    async execute(): Promise<Tb_statuspedidos[]>{
        const ListaStatuspedidos= await prisma.tb_statuspedidos.findMany({

        });

        return ListaStatuspedidos;
    }
  }

