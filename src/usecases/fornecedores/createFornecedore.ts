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

  export class CriandoFornecedor{
    async execute({for_nome , for_celular, for_email, for_cnpj, for_cep, for_website  }: typeFornecedor): Promise<Tb_fornecedores>{
        const novoFornecedor = await prisma.tb_fornecedores.create({
            data:{
                for_nome: for_nome,
                for_celular: for_celular,
                for_email: for_email,
                for_cnpj: for_cnpj,
                for_cep: for_cep,
                for_website: for_website
            }
        });
        return novoFornecedor;
    }
  }
