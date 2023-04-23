import { PrismaClient, Tb_funcionarios } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export const prisma = new PrismaClient()

export interface typeFuncionario{
    fun_nome: string
    fun_celular:   string
    fun_email:      string
    fun_cpf:        string
    fun_logradouro: string
    fun_bai_id:   number
    fun_car_id: number
    
  
  }
  export class LendoFuncionario{
    async execute(): Promise<Tb_funcionarios[]>{
        const ListaFuncionario= await prisma.tb_funcionarios.findMany({
            include:{
                tb_bairros:{
                    select:{
                        bai_bairro: true
                    }
                },
                tb_cargos:{
                    select:{
                        car_cargo: true
                    }
                }
            }
            
        });

        return ListaFuncionario;
    }
  }
