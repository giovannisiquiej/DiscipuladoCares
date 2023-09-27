import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Ministro } from "./Ministro.js";

export const Iglesia = sequelize.define("iglesia", {
  Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nombre: {
    type: DataTypes.STRING(75),
    allowNull: false,
  },
  Direccion: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  SitioWeb: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  UrlLogo: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  FechaApertura: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  FechaInicioCobertura: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  Estado: {
    type: DataTypes.STRING(3),
    allowNull: false,
    defaultValue: "A", // A=Activa - I=Inactiva
  },
});

Iglesia.hasMany(Ministro, {
  foreignKey: "IglesiaId",
  sourceKey: "Id",
});

Ministro.belongsTo(Iglesia, {
  foreignKey: "IglesiaId",
  targetId: "Id",
});
