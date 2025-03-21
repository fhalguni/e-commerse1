import dotenv from "dotenv";
import { DataSource } from "typeorm";

dotenv.config({ path: "config.env" });

export const AppDataSource = new DataSource({
  type: "mssql",
  port: 1982,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  synchronize: true,

  entities: ["./src/models/*.ts"],
  options: {
    trustServerCertificate: true,
    encrypt: false,
  },
  authentication: {
    type: "default",
    options: {
      userName: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
    },
  },
});
