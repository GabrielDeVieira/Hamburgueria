import { PrismaClient, Tb_menu } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typeMenu{
    men_nome:  string
    men_descricao: string
    men_preco: number
  
  }
  export class LendoMenu{
    async execute(): Promise<Tb_menu[]>{
        const ListaMenu= await prisma.tb_menu.findMany({
            
        });

        return ListaMenu;
    }
  }