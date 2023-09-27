import { Router } from "express";
const router = Router();
import {
  getIglesias,
  addIglesia,
  updateIglesia,
  deleteIglesia,
  getIglesia,
  getIglesiaMinistro,
} from "../controller/iglesias.controller.js";

router.get("/iglesias", getIglesias);
router.get("/iglesias/:id", getIglesia);
router.post("/iglesias", addIglesia);
router.put("/iglesias/:id", updateIglesia);
router.delete("/iglesias/:id", deleteIglesia);
router.get("/iglesias/:id/tasks", getIglesiaMinistro);

export default router;
