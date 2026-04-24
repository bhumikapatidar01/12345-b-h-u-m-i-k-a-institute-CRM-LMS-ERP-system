export const EmployeeQueries = {
  create: `
    INSERT INTO employees (name, role, joining_date, reporting_to)
    VALUES (?, ?, ?, ?)
  `,

  getAll: `
    SELECT * FROM employees
  `,

  getById: `
    SELECT * FROM employees WHERE id = ?
  `,

  update: `
    UPDATE employees
    SET name = ?, role = ?, joining_date = ?
    
    , reporting_to = ?
    WHERE id = ?
  `,

  delete: `
    DELETE FROM employees WHERE id = ?
  `,
};