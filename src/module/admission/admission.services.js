import pool from '../../config/db.config.js';
import { CREATE_ADMISSION,
     GET_ALL_ADMISSIONS,
      GET_ADMISSION_BY_ID, 
      UPDATE_ADMISSION, 
      DELETE_ADMISSION } from './admission.queries.js';

export const createAdmissionService = async (data) => {
  const { lead_id, student_name, course_id, batch_id } = data;

  const [result] = await pool.query(CREATE_ADMISSION, [
    lead_id,
    student_name,
    course_id,
    batch_id,
  ]);

  return {
    id: result.insertId,
    lead_id,
    student_name,
    course_id,
    batch_id,
  };
};

export const getAllAdmissionsService = async () => {
  const [rows] = await pool.query(GET_ALL_ADMISSIONS);
  return rows;
};

export const getAdmissionByIdService = async (id) => {
  const [rows] = await pool.query(GET_ADMISSION_BY_ID, [id]);
  return rows[0];
};

export const updateAdmissionService = async (id, data) => {
  const { lead_id, student_name, course_id, batch_id } = data;

  const [result] = await pool.query(UPDATE_ADMISSION, [
    lead_id,
    student_name,
    course_id,
    batch_id,
    id
  ]);

  if (result.affectedRows === 0) {
    return null;
  }

  const [rows] = await pool.query(GET_ADMISSION_BY_ID, [id]);
  return rows[0];
};

export const deleteAdmissionService = async (id) => {
  const [result] = await pool.query(DELETE_ADMISSION, [id]);

  if (result.affectedRows === 0) {
    return null;
  }

  return { id };
};