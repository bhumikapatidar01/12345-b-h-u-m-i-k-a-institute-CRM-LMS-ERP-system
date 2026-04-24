import { leadService } from "./leads.services.js";

export const leadController = {
  create: async (req, res) => {
    try {
      const data = await leadService.createLead(req.body);
      res.json({ success: true, data });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const data = await leadService.getAllLeads();
      res.json({ success: true, data });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  getById: async (req, res) => {
    try {
      const data = await leadService.getLeadById(req.params.id);
      res.json({ success: true, data });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  updateStatus: async (req, res) => {
    try {
      const data = await leadService.updateStatus(
        req.params.id,
        req.body.status
      );
      res.json({ success: true, data });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

  assignLead: async (req, res) => {
    try {
      const data = await leadService.assignLead(
        req.params.id,
        req.body.employeeId
      );
      res.json({ success: true, data });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },
};