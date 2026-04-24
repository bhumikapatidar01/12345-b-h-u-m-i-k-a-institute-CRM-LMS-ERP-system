export const createTestQuery = `
    INSERT INTO tests (subject_id, title)
    VALUES (?, ?)
`;

export const getTestsBySubjectQuery = `
    SELECT * FROM tests WHERE subject_id = ?
`;

export const deleteTestQuery = `
    DELETE FROM tests WHERE id = ?
`;