import { Router } from "express";
const router = Router();
import {
  getMinistros,
  addMinistro,
  updateMinistro,
  deleteMinistro,
  getMinistro,
} from "../controller/ministros.controller.js";

router.get("/ministros", getMinistros);
router.get("/ministros/:id", getMinistro);
router.post("/ministros", addMinistro);
router.put("/ministros/:id", updateMinistro);
router.delete("/ministros/:id", deleteMinistro);

export default router;
