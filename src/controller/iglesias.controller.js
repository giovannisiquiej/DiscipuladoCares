import { Op } from "sequelize";
import { Iglesia } from "../models/Iglesia.js";
import { Ministro } from "../models/Ministro.js";

//busca todos las iglesias
export const getIglesias = async (req, res) => {
  try {
    const iglesias = await Iglesia.findAll({
      attributes: [
        "Id",
        "Nombre",
        "Direccion",
        "SitioWeb",
        "UrlLogo",
        "FechaApertura",
      ],
      where: { Estado: { [Op.eq]: "A" } },
      order: [["Id", "ASC"]],
    });

    if (!iglesias.length > 0)
      return res.status(404).json({ message: "No se encontraron datos" });

    res.json(iglesias);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getIglesia = async (req, res) => {
  try {
    const { id } = req.params;
    const iglesiaB = await Iglesia.findOne({
      where: { Id: { [Op.eq]: id } },
    });

    if (!iglesiaB)
      return res.status(404).json({ message: "No se encontraron datos" });

    res.json(iglesiaB);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Retorna los ministros de una iglesia
export const getIglesiaMinistro = async (req, res) => {
  try {
    const { id } = req.params;
    const ministro = await Ministro.findAll({
      where: { iglesiaId: { [Op.eq]: id } },
    });

    res.json(ministro);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const addIglesia = async (req, res) => {
  try {
    const {
      Nombre,
      Direccion,
      SitioWeb,
      UrlLogo,
      FechaApertura,
      FechaInicioCobertura,
      Estado,
    } = req.body;
    const newIglesia = await Iglesia.create({
      Nombre,
      Direccion,
      SitioWeb,
      UrlLogo,
      FechaApertura,
      FechaInicioCobertura,
      Estado,
    });

    res.json(newIglesia);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateIglesia = async (req, res) => {
  try {
    const {
      Nombre,
      Direccion,
      SitioWeb,
      UrlLogo,
      FechaApertura,
      FechaInicioCobertura,
      Estado,
    } = req.body;
    const { id } = req.params;

    const iglesiaUPD = await Iglesia.findByPk(id);
    iglesiaUPD.Nombre = Nombre;
    iglesiaUPD.Direccion = Direccion;
    iglesiaUPD.SitioWeb = SitioWeb;
    iglesiaUPD.UrlLogo = UrlLogo;
    iglesiaUPD.SitioWeb = SitioWeb;
    iglesiaUPD.FechaApertura = FechaApertura;
    iglesiaUPD.FechaInicioCobertura = FechaInicioCobertura;
    iglesiaUPD.Estado = Estado;

    await iglesiaUPD.save();

    res.json(iglesiaUPD);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteIglesia = async (req, res) => {
  try {
    const { id } = req.params;
    await Iglesia.destroy({
      where: { Id: { [Op.eq]: id } },
    });

    res.sendStatus(404);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
