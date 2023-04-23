import { PrismaClient, Tb_menu } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typeMenu{
    men_nome:  string
    men_descricao: string
    men_preco: number
  
  }

  export class CriandoMenu{
    async execute({men_nome, men_descricao,men_preco}: typeMenu): Promise<Tb_menu>{
        const novoMenu= await prisma.tb_menu.create({
            data:{
                men_nome: men_nome,
                men_descricao: men_descricao,
                men_preco: men_preco
            }
        });
        return novoMenu
    }
  }

