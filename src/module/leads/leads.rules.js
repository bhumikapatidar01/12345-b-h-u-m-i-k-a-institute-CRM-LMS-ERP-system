export const leadRules = {
  validateLead: (data) => {
    const { name, phone } = data;

    if (!name || !phone) {
      throw new Error("Name and phone are required");
    }

    return true;
  },

  normalizePhone: (phone) => {
    return phone.replace(/\D/g, "");
  },

  defaultStatus: () => {    return "new";  },
       


  checkDuplicateEmail: async (pool, email) => {
    const [rows] = await pool.execute(
      "SELECT id FROM leads WHERE email = ?",
      [email]
    );

    if (rows.length > 0) {
      throw new Error("Email already exists");
    }
  }
}
