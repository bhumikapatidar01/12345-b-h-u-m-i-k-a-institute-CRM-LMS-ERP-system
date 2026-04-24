export const CREATE_ADMISSION = `
  INSERT INTO admissions (lead_id, student_name, course_id, batch_id)
  VALUES (?, ?, ?, ?)
`;

export const GET_ALL_ADMISSIONS = `
  SELECT * FROM admissions ORDER BY id DESC;
`;

export const GET_ADMISSION_BY_ID = `
  SELECT * FROM admissions WHERE id = ?;
`;

export const UPDATE_ADMISSION = `
  UPDATE admissions 
  SET student_name = ?, course_id = ?, batch_id = ?
  WHERE id = ?;
`;

export const DELETE_ADMISSION = `
  DELETE FROM admissions WHERE id = ?;
`;