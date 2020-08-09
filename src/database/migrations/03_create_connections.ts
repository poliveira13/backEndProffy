import Knex from "knex";

//Quais alteracoes eu quero fazer no bd
export async function up(knex: Knex) {
  return knex.schema.createTable("connections", (table) => {
    table.increments("id").primary();

    //Relacionamento (chave estrangeira)
    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table.timestamp("created_at").defaultTo("now()").notNullable();
  });
}
//Quando da errado o que eu faco para voltar
export async function down(knex: Knex) {
  return knex.schema.dropTable("connections");
}
