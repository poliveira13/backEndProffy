import Knex from "knex";

//Quais alteracoes eu quero fazer no bd
export async function up(knex: Knex) {
  return knex.schema.createTable("classes", (table) => {
    table.increments("id").primary();
    table.string("subject").notNullable();
    table.decimal("cost").notNullable();

    //Relacionamento (chave estrangeira)
    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}
//Quando da errado o que eu faco para voltar
export async function down(knex: Knex) {
  return knex.schema.dropTable("classes");
}
