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
    for_id: number
    
  
  }
  export async function AtualizandoFornecedor(input: typeFornecedor){
    
        
    const {for_id,for_nome , for_celular, for_email, for_cnpj, for_cep, for_website } = input
    try{
        const editFornecedor = await prisma.tb_fornecedores.update({
            where:{for_id},
            data:{
                for_nome: for_nome,
                for_celular: for_celular,
                for_email: for_email,
                for_cnpj: for_cnpj,
                for_cep: for_cep,
                for_website: for_website
            }
        });
        return editFornecedor;
    }catch(error){
    throw new Error("Erro ao atualizar Fornecedor")
    }
}
