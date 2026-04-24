export const leadQueries = {
  create: `
    INSERT INTO leads 
    (name, phone, email, source, referred_by, assigned_to, status)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `,

  getAll: `
    SELECT * FROM leads
  `,

  getById: `
    SELECT * FROM leads WHERE id = ?
  `,

  updateStatus: `
    UPDATE leads SET status = ? WHERE id = ?
  `,

  assignLead: `
    UPDATE leads SET assigned_to = ? WHERE id = ?
  `,
};