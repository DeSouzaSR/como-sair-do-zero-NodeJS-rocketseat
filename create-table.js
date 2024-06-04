import { sql } from "./db.js";

sql`drop table if exist videos`.then(() => {
    console.log("Tabela apagada")
})

sql`
CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title TEXT,
    description TEXT,
    duration INTEGER
  );
  `.then(() => {
  console.log("Tabela criada!");
});