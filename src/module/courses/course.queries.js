export const CREATE_COURSE = "INSERT INTO courses (name) VALUES (?)"

export const GET_ALL_COURSES = "SELECT * FROM courses ";

export const GET_COURSE_BY_ID = "SELECT * FROM courses WHERE id = ?";

export const UPDATE_COURSE = "UPDATE courses SET name = ? WHERE id = ?";

export const DELETE_COURSE = "DELETE FROM courses WHERE id = ? ";