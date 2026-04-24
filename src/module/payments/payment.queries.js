export const createPaymentQuery = `
    INSERT INTO payments (admission_id, amount, payment_mode)
    VALUES (?, ?, ?)
`;

export const getAllPaymentsQuery = `
    SELECT * FROM payments ORDER BY id DESC
`;

export const getPaymentByIdQuery = `
    SELECT * FROM payments WHERE id = ?
`;

export const deletePaymentQuery = `
    DELETE FROM payments WHERE id = ?
`;

// Installments
export const createInstallmentQuery = `
    INSERT INTO fee_installments (admission_id, due_date, amount)
    VALUES (?, ?, ?)
`;

export const getInstallmentsByAdmissionQuery = `
    SELECT * FROM fee_installments 
    WHERE admission_id = ?
    ORDER BY due_date ASC
`;