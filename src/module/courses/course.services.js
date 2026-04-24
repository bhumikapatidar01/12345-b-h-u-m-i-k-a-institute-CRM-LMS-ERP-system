import pool from "../../config/db.config.js";
import { CREATE_COURSE, GET_ALL_COURSES, GET_COURSE_BY_ID, UPDATE_COURSE, DELETE_COURSE } from "./course.queries.js";

export const createCourseService = async (data) => {
  const { name } = data;
  const result = await pool.query(CREATE_COURSE, [name]);
  
};

export const getAllCoursesService = async () => {
  const result = await pool.query(GET_ALL_COURSES);
  return result[0];
 
};

export const getCourseByIdService = async (id) => {
  const [result] = await pool.query(GET_COURSE_BY_ID, [id]);
  console.log(result);
  return result[0];
 
};

export const updateCourseService = async (id, data) => {
  const { name } = data;
  const [result] = await pool.query(UPDATE_COURSE, [ name, id]);
   if (result.affectedRows === 0) {
    return null; // No course found to update

  };
   const [rows] = await pool.query(
    "SELECT * FROM courses WHERE id = ?",
    [id]
  );

  return rows[0];
};
    



export const deleteCourseService = async (id) => {
  const result = await pool.query(DELETE_COURSE, [id]);
  return result[0];
};