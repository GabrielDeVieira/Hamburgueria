-- CreateTable
CREATE TABLE "Tb_bairros" (
    "bai_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bai_bairro" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Tb_cargos" (
    "car_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "car_cargo" TEXT NOT NULL,
    "car_salario" DECIMAL NOT NULL
);

-- CreateTable
CREATE TABLE "Tb_funcionarios" (
    "fun_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fun_nome" TEXT NOT NULL,
    "fun_celular" TEXT NOT NULL,
    "fun_cpf" TEXT NOT NULL,
    "fun_email" TEXT NOT NULL,
    "fun_logradouro" TEXT NOT NULL,
    "fun_car_id" INTEGER NOT NULL,
    "fun_bai_id" INTEGER NOT NULL,
    CONSTRAINT "Tb_funcionarios_fun_bai_id_fkey" FOREIGN KEY ("fun_bai_id") REFERENCES "Tb_bairros" ("bai_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Tb_funcionarios_fun_car_id_fkey" FOREIGN KEY ("fun_car_id") REFERENCES "Tb_cargos" ("car_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tb_clientes" (
    "cli_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cli_nome" TEXT NOT NULL,
    "cli_celular" TEXT NOT NULL,
    "cli_email" TEXT NOT NULL,
    "cli_cpf" TEXT NOT NULL,
    "cli_logradouro" TEXT NOT NULL,
    "cli_bai_id" INTEGER NOT NULL,
    CONSTRAINT "Tb_clientes_cli_bai_id_fkey" FOREIGN KEY ("cli_bai_id") REFERENCES "Tb_bairros" ("bai_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tb_statuspedidos" (
    "spd_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "spd_statuspedido" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Tb_metodospagamentos" (
    "mpg_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mpg_metododepagamento" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Tb_menu" (
    "men_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "men_nome" TEXT NOT NULL,
    "men_descricao" TEXT NOT NULL,
    "men_preco" DECIMAL NOT NULL
);

-- CreateTable
CREATE TABLE "Tb_itenspedidos" (
    "its_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "its_quantidade" INTEGER NOT NULL,
    "its_men_id" INTEGER NOT NULL,
    CONSTRAINT "Tb_itenspedidos_its_men_id_fkey" FOREIGN KEY ("its_men_id") REFERENCES "Tb_menu" ("men_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tb_pedidos" (
    "ped_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ped_datahora" DATETIME NOT NULL,
    "ped_spd_id" INTEGER NOT NULL,
    "ped_mpg_id" INTEGER NOT NULL,
    "ped_valortotal" DECIMAL NOT NULL,
    "ped_observacao" TEXT NOT NULL,
    CONSTRAINT "Tb_pedidos_ped_spd_id_fkey" FOREIGN KEY ("ped_spd_id") REFERENCES "Tb_statuspedidos" ("spd_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Tb_pedidos_ped_mpg_id_fkey" FOREIGN KEY ("ped_mpg_id") REFERENCES "Tb_metodospagamentos" ("mpg_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tb_fornecedores" (
    "for_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "for_nome" TEXT NOT NULL,
    "for_cnpj" TEXT NOT NULL,
    "for_email" TEXT NOT NULL,
    "for_celular" TEXT NOT NULL,
    "for_cep" TEXT NOT NULL,
    "for_website" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Tb_entrada" (
    "ent_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ent_produto" TEXT NOT NULL,
    "ent_quantidade" INTEGER NOT NULL,
    "ent_for_id" INTEGER NOT NULL,
    CONSTRAINT "Tb_entrada_ent_for_id_fkey" FOREIGN KEY ("ent_for_id") REFERENCES "Tb_fornecedores" ("for_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Tb_funcionarios_fun_cpf_key" ON "Tb_funcionarios"("fun_cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Tb_clientes_cli_cpf_key" ON "Tb_clientes"("cli_cpf");
