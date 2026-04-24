export const EmployeeRules = {
  applyReportingRule: (role, reporting_to) => {
    // ✅ Admin never reports to anyone
    if (role === "admin") {
      return null;
    }

    return reporting_to;
  },

  validateEmployee: (data) => {
    const { role, reporting_to } = data;

    if (role === "admin" && reporting_to) {
      throw new Error("Admin cannot have reporting manager");
    }

    return true;
  },
};