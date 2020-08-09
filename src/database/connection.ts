//arquivo de conexao com o banco
import knex from "knex";
import path from "path";

const db = knex({
  client: "sqlite3",
  connection: {
    //dirname (se referencia ao meu diretorio databse e ele vai entender que dentro desta pasta deve criar uma arquivo chamado database.sqlite)
    filename: path.resolve(__dirname, "database.sqlite"),
  },
  //especifico do sqlite (indicando que ele por padrao usará null)
  useNullAsDefault: true,
});

export default db;
