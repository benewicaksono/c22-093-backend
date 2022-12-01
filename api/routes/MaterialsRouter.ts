import express from "express";
import {
  createMaterial,
  deleteMaterial,
  getMaterial,
  getMaterialByKey,
  updateMaterial,
} from "../controllers/MaterialsController";

const router = express.Router();

router.get("/", getMaterial);
router.post("/", createMaterial);
router.get("/:key", getMaterialByKey);
router.patch("/:key", updateMaterial);
router.delete("/:key", deleteMaterial);

export default router;