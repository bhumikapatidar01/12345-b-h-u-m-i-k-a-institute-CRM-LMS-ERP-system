import pool from "../../config/db.config.js";
import { EmployeeQueries } from "./employees.queries.js";
import { EmployeeRules } from "../../middleware/role.validation.js";

export const EmployeeService = {
  createEmployee: async (data) => {
    const { name, role, joining_date, reporting_to } = data;

    const [result] = await pool.execute(EmployeeQueries.create, [
      name,
      role,
      joining_date,
      reporting_to,
    ]);
    return result;
  },

  getAllEmployees: async () => {
    const [rows] = await pool.execute(EmployeeQueries.getAll);
    return rows;
  },

  getEmployeeById: async (id) => {
    const [rows] = await pool.execute(EmployeeQueries.getById, [id]);
    return rows[0];
  },

  updateEmployee: async (id, data) => {
    const { name, role, joining_date, reporting_to } = data;
    const [result] = await pool.execute(EmployeeQueries.update, [
      name,
      role,
      joining_date,
      reporting_to,
      id,
    ]);
    return result;
  },

  deleteEmployee: async (id) => {
    const [result] = await pool.execute(EmployeeQueries.delete, [id]);
    return result;
  },
};