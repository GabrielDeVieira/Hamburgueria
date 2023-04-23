import { PrismaClient, Tb_cargos } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typeCargo{
    
    car_id: number
  
  }
  export async function DeletandoCargo(input: typeCargo){
    
        
    const {car_id} = input
    try{
        const deleteCargo = await prisma.tb_cargos.delete({
            where:{car_id},
        });
        return deleteCargo;
    }catch(error){
    throw new Error("Erro ao Deletar Cargo")
    }
}