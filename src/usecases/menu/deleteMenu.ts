import { PrismaClient, Tb_menu } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typeMenu{
   
    men_id: number
}
export async function DeletandoMenu(input: typeMenu){
    
        
    const {men_id} = input
    try{
        const deleteMenu = await prisma.tb_menu.delete({
            where:{men_id},
        });
        return deleteMenu;
    }catch(error){
    throw new Error("Erro ao Deletar Itens do pedido")
    }
}
