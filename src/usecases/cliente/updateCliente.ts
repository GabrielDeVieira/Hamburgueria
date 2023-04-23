import { PrismaClient, Tb_clientes } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typeCliente{
    cli_nome: string
    cli_celular:   string
    cli_email:      string
    cli_cpf:        string
    cli_logradouro: string
    cli_bai_id:   number
    cli_id: number
    
  
  }
  export async function AtualizandoCliente(input: typeCliente){
    
        
    const {cli_id, cli_nome , cli_celular, cli_email, cli_cpf, cli_logradouro,cli_bai_id } = input
    try{
        const editCliente = await prisma.tb_clientes.update({
            where:{cli_id},
            data:{
                cli_nome: cli_nome,
                cli_celular: cli_celular,
                cli_email: cli_email,
                cli_cpf: cli_cpf,
                cli_logradouro: cli_logradouro,
                cli_bai_id: cli_bai_id
            }
        });
        return editCliente;
    }catch(error){
    throw new Error("Erro ao atualizar Cliente")
    }
}
