export const createSubjectQuery = `
    INSERT INTO subjects (course_id, name)
    VALUES (?, ?)
`;

export const getAllSubjectsQuery = `
    SELECT * FROM subjects ORDER BY id DESC
`;

export const getSubjectByIdQuery = `
    SELECT * FROM subjects WHERE id = ?
`;

export const updateSubjectQuery = `
    UPDATE subjects SET name = ?, course_id = ?
    WHERE id = ?
`;

export const deleteSubjectQuery = `
    DELETE FROM subjects WHERE id = ?
`;