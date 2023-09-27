import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "u579848302_CaresTimoteo",
  "u579848302_admin_cares",
  "Libre*-2012",
  {
    host: "srv1065.hstgr.io",
    dialect: "mysql",
  }
);
