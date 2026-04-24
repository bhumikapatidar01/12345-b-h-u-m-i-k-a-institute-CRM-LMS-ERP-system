import pool from '../../../config/db.config.js';
import {
    createLessonQuery,
    getLessonsBySubjectQuery,
    getLessonByIdQuery,
    deleteLessonQuery
} from './lesson.queries.js';

export const createLessonService = async ({ subject_id, title }) => {
    const [result] = await pool.execute(createLessonQuery, [subject_id, title]);
    return result;
};

export const getLessonsBySubjectService = async (subject_id) => {
    const [rows] = await pool.execute(getLessonsBySubjectQuery  , [subject_id]);
    return rows;
};

export const getLessonByIdService = async (id) => {
    const [rows] = await pool.execute(getLessonByIdQuery , [id]);
    return rows[0];
};

export const deleteLessonService = async (id) => {
    const [result] = await pool.execute(deleteLessonQuery , [id]);
    return result;
};