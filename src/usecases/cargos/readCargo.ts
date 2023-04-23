import { PrismaClient, Tb_cargos } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typeCargo{
    car_cargo:  string
    car_salario: number
  
  }
  export class LendoCargo{
    async execute(): Promise<Tb_cargos[]>{
        const ListaCargo= await prisma.tb_cargos.findMany({
        });

        return ListaCargo;
    }
  }
