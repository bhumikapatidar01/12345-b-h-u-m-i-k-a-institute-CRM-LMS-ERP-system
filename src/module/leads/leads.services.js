import pool from "../../config/db.config.js";
import { leadQueries } from "./leads.queries.js";
import { leadRules} from "./leads.rules.js";


export const leadService = {
  createLead: async (data) => {
    await leadRules.checkDuplicateEmail(pool, data.email);
    let {
      name,
      phone,
      email,
      source,
      referred_by,
      assigned_to,
      status,
    } = data;

   // Validate lead data
    leadRules.validateLead(data);
    phone = leadRules.normalizePhone(phone);
    status = status || leadRules.defaultStatus();                          


    const [result] = await pool.execute(leadQueries.create, [
      name,
      phone,
      email,
      source,
      referred_by || null,
      assigned_to || null,
      status,
    ]);

    return result;
  },

  getAllLeads: async () => {
    const [rows] = await pool.execute(leadQueries.getAll);
    return rows;
  },

  getLeadById: async (id) => {
    const [rows] = await pool.execute(leadQueries.getById, [id]);
    return rows[0];
  },

  updateStatus: async (id, status) => {
    const [result] = await pool.execute(leadQueries.updateStatus, [
      status,
      id,
    ]);
    return result;
  },

  assignLead: async (id, employeeId) => {
    const [result] = await pool.execute(leadQueries.assignLead, [
      employeeId,
      id,
    ]);
    return result;
  },
};