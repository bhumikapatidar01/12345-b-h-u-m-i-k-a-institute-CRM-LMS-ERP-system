import pool from "../../config/db.config.js";

import {create_batch,get_all_batches,get_batch_by_id,update_batch,delete_batch} from './batch.queries.js';


export const createBatchService = async (data) => {
  const {  course_id, trainer_id, start_date, end_date, timing } = data;

  const [result] = await pool.query(create_batch, [ course_id, trainer_id, start_date, end_date, timing]);

  return {
    id: result.insertId,
     course_id,
     trainer_id,
        start_date, 
        end_date,
        timing
  };
};

export const getAllBatchesService = async () => {
  const [rows] = await pool.query(get_all_batches);
  return rows;
};

export const getBatchByIdService = async (id) => {
  const [rows] = await pool.query(get_batch_by_id, [id]);
  return rows[0];
};

export const updateBatchService = async (id, data) => {
  const {  course_id } = data;

  const [result] = await pool.query(update_batch, [
    
    course_id,
    id
  ]);

  if (result.affectedRows === 0) {
    return null;
  }

  const [rows] = await pool.query(get_batch_by_id, [id]);
  return rows[0];
};

export const deleteBatchService = async (id) => {
  const [result] = await pool.query(delete_batch, [id]);

  if (result.affectedRows === 0) {
    return null;
  }

  return { id };
};