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
    
  
  }

  export class CriandoCliente{
    async execute({cli_nome , cli_celular, cli_email, cli_cpf, cli_logradouro,cli_bai_id  }: typeCliente): Promise<Tb_clientes>{
        const novoCliente = await prisma.tb_clientes.create({
            data:{
                cli_nome: cli_nome,
                cli_celular: cli_celular,
                cli_email: cli_email,
                cli_cpf: cli_cpf,
                cli_logradouro: cli_logradouro,
                cli_bai_id: cli_bai_id
            }
        });
        return novoCliente;
    }
  }
 