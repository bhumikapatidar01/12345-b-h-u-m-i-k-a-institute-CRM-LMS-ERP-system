import express from "express";
import { createBatch,
         getAllBatches,
         getBatchById,
         updateBatch,
         deleteBatch } from "./batch.controller.js";

const router = express.Router();

router.post("/create", createBatch);
router.get("/getAll", getAllBatches);
router.get("/:id", getBatchById);
router.put("/:id", updateBatch);
router.delete("/:id", deleteBatch);

export default router;