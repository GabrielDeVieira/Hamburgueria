import { PrismaClient, Tb_clientes } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typeCliente{
    cli_id: number
    
  
  }
export async function DeletandoCliente(input: typeCliente){
    
        
    const {cli_id} = input
    try{
        const deleteCliente = await prisma.tb_clientes.delete({
            where:{cli_id},
        });
        return deleteCliente;
    }catch(error){
    throw new Error("Erro ao Deletar Cliente")
    }
}