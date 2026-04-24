import express from "express";
import { leadController } from "./leads.controller.js";


const router = express.Router();

router.post("/create", leadController.create);
router.get("/getall", leadController.getAll);
router.get("/:id", leadController.getById);
router.put("/:id/status", leadController.updateStatus);
router.put("/:id/assign", leadController.assignLead);

export default router;