import { Router } from "express";
import { Request, Response } from "express";
import { bairroRoutes } from "./bairro.routes";
import { CargoRoutes } from "./cargo.route";
import { ClienteRoutes } from "./cliente.routes";
import { EntradaRoutes } from "./entrada.routes";
import { FornecedorRoutes } from "./fornecedor.routes";
import { FuncionarioRoutes } from "./funcionario.routes";
import { ItenspedidoRoutes } from "./itenspedido.routes";
import { menuRoutes } from "./menu.routes";
import { metodopagamentoRoutes } from "./metodopagamento.routes";
import { pedidosRoutes } from "./pedido.routes";
import { statusPedidoRoutes } from "./statuspedido.routes";


const routes = Router();

routes.get("/", (req:Request, res:Response) => {
    return res.status(200).send({success:"Server ON and Connect!"})
})

//creando rotas
routes.use("/bairro", bairroRoutes)
routes.use("/cargo", CargoRoutes)
routes.use("/cliente", ClienteRoutes)
routes.use("/entrada",EntradaRoutes)
routes.use("/fornecedor", FornecedorRoutes)
routes.use("/funcionario", FuncionarioRoutes)
routes.use("/intenspedido", ItenspedidoRoutes)
routes.use("/menu", menuRoutes)
routes.use("/metododopagamento", metodopagamentoRoutes)
routes.use("/pedido", pedidosRoutes)
routes.use("/statuspedido", statusPedidoRoutes)


export { routes }