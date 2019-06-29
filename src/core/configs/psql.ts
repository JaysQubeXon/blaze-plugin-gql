import { PoolClient } from "pg";
import * as config from './database.json';

const { Pool } = require("pg");

const pool = new Pool(config.psql);

pool.on("error", (err: Error, client: PoolClient) => {
  console.error("Unexpected error on idle client", err);
});

export { pool };
