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
  export class LendoCliente{
    async execute(): Promise<Tb_clientes[]>{
        const ListaCliente= await prisma.tb_clientes.findMany({
            include:{
                tb_bairros:{
                    select:{
                        bai_bairro: true

                    }
                }
            }
        });

        return ListaCliente;
    }
  }