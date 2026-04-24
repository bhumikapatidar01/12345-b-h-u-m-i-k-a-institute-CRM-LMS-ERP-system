import pool from "../../../config/db.config.js";
import { createSubjectQuery,
         getAllSubjectsQuery,
         getSubjectByIdQuery, 
         updateSubjectQuery, 
         deleteSubjectQuery
     } from "./subject.queries.js";

export const createSubjectService = async ({ course_id, name }) => {
    const [result] = await pool.execute(createSubjectQuery, [course_id, name]);
    return result;
};

export const getAllSubjectsService = async () => {
    const [rows] = await pool.execute(getAllSubjectsQuery);
    return rows;
};

export const getSubjectByIdService = async (id) => {
    const [rows] = await pool.execute(getSubjectByIdQuery, [id]);
    return rows[0];
};

export const updateSubjectService = async (id, { name, course_id }) => {
    const [result] = await pool.execute(updateSubjectQuery, [name, course_id, id]);
    return result;
};

export const deleteSubjectService = async (id) => {
    const [result] = await pool.execute(deleteSubjectQuery, [id]);
    return result;
};