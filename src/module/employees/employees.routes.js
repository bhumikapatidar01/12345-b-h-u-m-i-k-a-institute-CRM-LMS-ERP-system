import express from "express";
import { EmployeeController } from "./employees.controller.js";
import { EmployeeRules } from "../../middleware/role.validation.js";

const router = express.Router();

router.post("/create", EmployeeController.create);
router.get("/getall", EmployeeController.getAll);
router.get("/:id", EmployeeController.getById);
router.put("/:id", EmployeeController.update);
router.delete("/:id", EmployeeController.delete);

export default router;