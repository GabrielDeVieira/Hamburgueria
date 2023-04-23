import { PrismaClient, Tb_fornecedores } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typeFornecedor{
    for_nome: string
    for_celular:   string
    for_email:      string
    for_cnpj:        string
    for_cep: string
    for_website:   string
    
  
  }
  export class LendoFornecedor{
    async execute(): Promise<Tb_fornecedores[]>{
        const ListaFornecedor= await prisma.tb_fornecedores.findMany({
            
        });

        return ListaFornecedor;
    }
  }