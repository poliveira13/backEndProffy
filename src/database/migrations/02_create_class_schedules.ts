import Knex from "knex";

//Quais alteracoes eu quero fazer no bd
export async function up(knex: Knex) {
  return knex.schema.createTable("class_schedules", (table) => {
    table.increments("id").primary();
    table.integer("week_day").notNullable();
    table.integer("from").notNullable();
    table.integer("to").notNullable();

    //Relacionamento (chave estrangeira)
    table
      .integer("class_id")
      .notNullable()
      .references("id")
      .inTable("classes")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}
//Quando da errado o que eu faco para voltar
export async function down(knex: Knex) {
  return knex.schema.dropTable("class_schedules");
}
