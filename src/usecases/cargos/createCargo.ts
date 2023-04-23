import { PrismaClient, Tb_cargos } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typeCargo{
    car_cargo:  string
    car_salario: number
  
  }

  export class CriandoCargos{
    async execute({car_cargo, car_salario}: typeCargo): Promise<Tb_cargos>{
        const novoCargo = await prisma.tb_cargos.create({
            data:{
                car_cargo: car_cargo,
                car_salario: car_salario
            }
        });
        return novoCargo;
    }
  }