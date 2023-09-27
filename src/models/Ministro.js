import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Ministro = sequelize.define("ministro", {
  Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nombres: {
    type: DataTypes.STRING(75),
    allowNull: false,
  },
  Apellidos: {
    type: DataTypes.STRING(75),
    allowNull: false,
  },
  ApellidoCasada: {
    type: DataTypes.STRING(25),
    allowNull: true,
  },
  Direccion: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  FechaNacimiento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  Genero: {
    type: DataTypes.STRING(1),
    allowNull: false,
  },
  NumeroIdentificacion: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  Estado: {
    type: DataTypes.STRING(3),
    allowNull: false,
  },
  TipoMinistro: {
    type: DataTypes.STRING(30),
    allowNull: false,
    defaultValue: "Pastor", // Apostol / Profeta / Evangelista / Pastor / Maestro
  },
});
