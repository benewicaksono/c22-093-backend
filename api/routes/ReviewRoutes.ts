import express from "express";
import {
  createReview,
  getReview,
  getReviewById
} from "../controllers/ReviewController";

const router = express.Router();

router.get("/", getReview);
router.post("/", createReview);
router.get("/:id", getReviewById);

export default router;