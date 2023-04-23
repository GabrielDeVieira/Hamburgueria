-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tb_pedidos" (
    "ped_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ped_datahora" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ped_spd_id" INTEGER NOT NULL,
    "ped_mpg_id" INTEGER NOT NULL,
    "ped_valortotal" DECIMAL NOT NULL,
    "ped_observacao" TEXT NOT NULL,
    CONSTRAINT "Tb_pedidos_ped_spd_id_fkey" FOREIGN KEY ("ped_spd_id") REFERENCES "Tb_statuspedidos" ("spd_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Tb_pedidos_ped_mpg_id_fkey" FOREIGN KEY ("ped_mpg_id") REFERENCES "Tb_metodospagamentos" ("mpg_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Tb_pedidos" ("ped_datahora", "ped_id", "ped_mpg_id", "ped_observacao", "ped_spd_id", "ped_valortotal") SELECT "ped_datahora", "ped_id", "ped_mpg_id", "ped_observacao", "ped_spd_id", "ped_valortotal" FROM "Tb_pedidos";
DROP TABLE "Tb_pedidos";
ALTER TABLE "new_Tb_pedidos" RENAME TO "Tb_pedidos";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
