import { PrismaClient, Tb_menu } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typeMenu{
    men_nome:  string
    men_descricao: string
    men_preco: number
    men_id: number
  
  }
  export async function AtualizandoMenu(input: typeMenu){
    
        
    const {men_id, men_nome, men_descricao,men_preco } = input
    try{
        const editMenu = await prisma.tb_menu.update({
            where:{men_id},
            data:{
                men_nome: men_nome,
                men_descricao: men_descricao,
                men_preco: men_preco
            }
        });
        return editMenu;
    }catch(error){
    throw new Error("Erro ao atualizar Menu")
    }
}

