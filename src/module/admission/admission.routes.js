import express from "express";
import { createAdmission,
         getAllAdmissions,
         getAdmissionById,  
         updateAdmission,
         deleteAdmission } from "./admission.controller.js";

const router = express.Router();

router.post("/create", createAdmission);
router.get("/getAll", getAllAdmissions);
router.get("/:id", getAdmissionById);
router.put("/:id", updateAdmission);
router.delete("/:id", deleteAdmission);

export default router;