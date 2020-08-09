import Knex from "knex";

//Quais alteracoes eu quero fazer no bd
export async function up(knex: Knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("avatar").notNullable();
    table.string("whatsapp").notNullable();
    table.string("bio").notNullable();
  });
}
//Quando da errado o que eu faco para voltar
export async function down(knex: Knex) {
  return knex.schema.dropTable("users");
}
