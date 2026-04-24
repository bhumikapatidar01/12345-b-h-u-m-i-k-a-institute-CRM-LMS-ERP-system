import { EmployeeService } from "./employees.services.js";
import { success, error } from "../../utils/response.js";
import { EmployeeRules } from "../../middleware/role.validation.js";

export const EmployeeController = {
  create: async (req, res) => {
    try {
      // Apply reporting rule
      req.body.reporting_to = EmployeeRules.applyReportingRule(req.body.role, req.body.reporting_to);

      // Validate employee data
      EmployeeRules.validateEmployee(req.body);

      const data = await EmployeeService.createEmployee(req.body);
      return success(res, data, "Employee created");
    } catch (err) {
      return error(res, err.message);
    }
  },

  getAll: async (req, res) => {
    try {
      const data = await EmployeeService.getAllEmployees();
      return success(res, data);
    } catch (err) {
      return error(res, err.message);
    }
  },

  getById: async (req, res) => {
    try {
      const data = await EmployeeService.getEmployeeById(req.params.id);
      return success(res, data);
    } catch (err) {
      return error(res, err.message);
    }
  },

  update: async (req, res) => {
    try {
      const data = await EmployeeService.updateEmployee(req.params.id, req.body);
      return success(res, data, "Employee updated");
    } catch (err) {
      return error(res, err.message);
    }
  },

  delete: async (req, res) => {
    try {
      const data = await EmployeeService.deleteEmployee(req.params.id);
      return success(res, data, "Employee deleted");
    } catch (err) {
      return error(res, err.message);
    }
  },
};