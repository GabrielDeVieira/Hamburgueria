import { PrismaClient, Tb_cargos } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typeCargo{
    car_cargo:  string
    car_salario: number
    car_id: number
  
  }

  export async function AtualizandoCargo(input: typeCargo){
    
        
        const {car_cargo, car_salario, car_id} = input
        try{
            const editCargo = await prisma.tb_cargos.update({
                where:{car_id},
                data:{
                    car_cargo: car_cargo,
                    car_salario: car_salario
                }
            });
            return editCargo;
        }catch(error){
        throw new Error("Erro ao atualizar Cargo")
        }
    }
  