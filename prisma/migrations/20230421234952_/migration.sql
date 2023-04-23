/*
  Warnings:

  - A unique constraint covering the columns `[for_cnpj]` on the table `Tb_fornecedores` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Tb_fornecedores_for_cnpj_key" ON "Tb_fornecedores"("for_cnpj");
