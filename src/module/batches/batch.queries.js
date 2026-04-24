export const create_batch = `
  INSERT INTO batches (course_id,trainer_id,start_date,end_date,timing)
  VALUES (?, ?, ?, ?, ?)
`;

export const get_all_batches = `
  SELECT * FROM batches ORDER BY id DESC;
`;

export const get_batch_by_id = `
  SELECT * FROM batches WHERE id = ?;
`;

export const update_batch = `
  UPDATE batches SET  course_id = ? WHERE id = ?;
`;

export const delete_batch = `
  DELETE FROM batches WHERE id = ?;
`;