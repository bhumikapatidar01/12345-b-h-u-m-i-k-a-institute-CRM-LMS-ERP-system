export const createLessonQuery = `
    INSERT INTO lessons (subject_id, title)
    VALUES (?, ?)
`;

export const getLessonsBySubjectQuery = `
    SELECT * FROM lessons WHERE subject_id = ?
`;

export const getLessonByIdQuery  = `
    SELECT * FROM lessons WHERE id = ?
`;

export const deleteLessonQuery = `
    DELETE FROM lessons WHERE id = ?
`;