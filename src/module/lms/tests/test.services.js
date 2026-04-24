import pool from '../../../config/db.config.js';
import {
    createTestQuery,
    getTestsBySubjectQuery,
    deleteTestQuery
} from './test.queries.js';

export const createTestService = async ({ subject_id, title }) => {
    const [result] = await pool.execute(createTestQuery, [subject_id, title]);
    return result;
};

export const getTestsBySubjectService = async (subject_id) => {
    const [rows] = await pool.execute(getTestsBySubjectQuery, [subject_id]);
    return rows;
};

export const deleteTestService = async (id) => {
    const [result] = await pool.execute(deleteTestQuery, [id]);
    return result;
};