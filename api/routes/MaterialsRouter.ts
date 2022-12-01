import express from "express";
import {
  createMaterial,
  deleteMaterial,
  getMaterial,
  updateMaterial,
} from "../controllers/MaterialsController";

const router = express.Router();

router.get("/", getMaterial);
router.post("/", createMaterial);
router.patch("/:key", updateMaterial);
router.delete("/:key", deleteMaterial);

export default router;