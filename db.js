import "dotenv/config";
import postgres from "postgres";

//const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

//const URL = `postgres://${PGUSER}, ${PGPASSWORD}, @${PGHOST}, ${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;
//postgresql://neondb_owner:eRNiYd3zZCD0@ep-little-heart-a5of94fg.us-east-2.aws.neon.tech/neondb?sslmode=require

// export const sql = postgres({
//   host: PGHOST,
//   database: PGDATABASE,
//   username: PGUSER,
//   password: PGPASSWORD,
//   port: 5432,
//   ssl: "require",
//   connection: {
//     options: `project=${ENDPOINT_ID}`,
//   },
// });

export const sql = postgres({
    host: 'ep-little-heart-a5of94fg.us-east-2.aws.neon.tech',
    database: 'neondb',
    username: 'neondb_owner',
    password: 'eRNiYd3zZCD0',
    port: 5432,
    ssl: "require",
    connection: {
      options: `project='ep-little-heart-a5of94fg'`,
    },
  });
