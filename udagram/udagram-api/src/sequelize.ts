import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize(`postgres://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`);
// {
//   username: config.username,
//   password: config.password,
//   database: config.database,
//   host: config.host,
//   port:config.port as unknown as number,
//   dialect: "postgres",
//   storage: ":memory:",
// }