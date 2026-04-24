import { createCourseService ,
         getAllCoursesService,
         getCourseByIdService,
         updateCourseService,
         deleteCourseService}  from "./course.services.js";

export const createCourse = async (req, res, next) => {
  try {
    const course = await createCourseService(req.body);
    res.status(201).json({ success: true, data: course });
  } catch (error) {
    next(error);
  }
};

export const getAllCourses = async (req, res, next) => {
  try {
    const courses = await getAllCoursesService();
    res.json({ success: true, data: courses });
  } catch (error) {
    next(error);
  }
};

export const getCourseById = async (req, res, next) => {
  try {
    const course = await getCourseByIdService(req.params.id);

    if (!course) {
      return res.status(404).json({ success: false, message: "Course not found" });
    }

    res.json({ success: true, data: course });
  } catch (error) {
    next(error);
  }
};

export const updateCourse = async (req, res, next) => {
  try {
    const course = await updateCourseService(req.params.id, req.body);

    if (!course) {
      return res.status(404).json({ success: false, message: "Course not found" });
    }

    res.json({ success: true, data: course });
  } catch (error) {
    next(error);
  }
};

export const deleteCourse = async (req, res, next) => {
  try {
    const course = await deleteCourseService(req.params.id);

    if (!course) {
      return res.status(404).json({ success: false, message: "Course not found" });
    }

    res.json({ success: true, message: "Course deleted successfully" });
  } catch (error) {
    next(error);
  }
};