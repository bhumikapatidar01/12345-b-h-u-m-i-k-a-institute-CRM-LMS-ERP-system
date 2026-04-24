import express from "express";
import { createCourse, 
         getAllCourses,
         getCourseById,
         updateCourse,
         deleteCourse } from "./course.controller.js";

const router = express.Router();

router.post("/create", createCourse);
router.get("/getAll", getAllCourses);
router.get("/:id", getCourseById);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);

export default router;