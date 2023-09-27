import { Op } from "sequelize";
import { Ministro } from "../models/Ministro.js";

//busca todos los proyectos
export const getMinistros = async (req, res) => {
  try {
    const ministros = await Task.findAll({
      attributes: [
        "Id",
        "Nombres",
        "Apellidos",
        "ApellidoCasada",
        "Direccion",
        "FechaNacimiento",
        "Genero",
        "NumeroIdentificacion",
        "TipoMinistro",
      ],
      order: [
        ["Apellidos", "ASC"],
        ["Nombres", "ASC"],
      ],
    });

    if (!ministros.length > 0)
      return res.status(404).json({ message: "No se encontraron datos" });

    res.json(ministros);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getMinistro = async (req, res) => {
  try {
    const { id } = req.params;
    const ministro = await Ministro.findOne({
      where: { Id: { [Op.eq]: id } },
    });

    if (!ministro)
      return res.status(404).json({ message: "No se encontraron datos" });

    res.json(ministro);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const addMinistro = async (req, res) => {
  try {
    const {
      Id,
      Nombres,
      Apellidos,
      ApellidoCasada,
      Direccion,
      FechaNacimiento,
      Genero,
      NumeroIdentificacion,
      TipoMinistro,
      IglesiaId,
    } = req.body;
    const newMinistro = await Task.create({
      Id,
      Nombres,
      Apellidos,
      ApellidoCasada,
      Direccion,
      FechaNacimiento,
      Genero,
      NumeroIdentificacion,
      TipoMinistro,
      IglesiaId,
    });

    res.json(newMinistro);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateMinistro = async (req, res) => {
  try {
    const {
      Nombres,
      Apellidos,
      ApellidoCasada,
      Direccion,
      FechaNacimiento,
      Genero,
      NumeroIdentificacion,
      TipoMinistro,
      IglesiaId,
    } = req.body;
    const { id } = req.params;

    const ministro = await Ministro.findByPk(id);
    ministro.Nombres = Nombres;
    ministro.Apellidos = Apellidos;
    ministro.ApellidoCasada = ApellidoCasada;
    ministro.Direccion = Direccion;
    ministro.FechaNacimiento = FechaNacimiento;
    ministro.Genero = Genero;
    ministro.NumeroIdentificacion = NumeroIdentificacion;
    ministro.TipoMinistro = TipoMinistro;
    ministro.IglesiaId = IglesiaId;

    await ministro.save();

    res.json(ministro);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteMinistro = async (req, res) => {
  try {
    const { id } = req.params;
    await Ministro.destroy({
      where: { Id: { [Op.eq]: id } },
    });

    res.sendStatus(404);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
