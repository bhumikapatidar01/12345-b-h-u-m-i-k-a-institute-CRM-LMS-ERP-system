import pool from '../../config/db.config.js';
import { createPaymentQuery,
    getAllPaymentsQuery,
    getPaymentByIdQuery,
    deletePaymentQuery,
    createInstallmentQuery,
    getInstallmentsByAdmissionQuery
} from './payment.queries.js';

// PAYMENTS
export const createPaymentService = async ({ admission_id, amount, payment_mode }) => {
    const [result] = await pool.execute(createPaymentQuery, [
        admission_id,
        amount,
        payment_mode
    ]);
    return result;
};

export const getAllPaymentsService = async () => {
    const [rows] = await pool.execute(getAllPaymentsQuery);
    return rows;
};

export const getPaymentByIdService = async (id) => {
    const [rows] = await pool.execute(getPaymentByIdQuery, [id]);
    return rows[0];
};

export const deletePaymentService = async (id) => {
    const [result] = await pool.execute(deletePaymentQuery, [id]);
    return result;
};


// INSTALLMENTS
export const createInstallmentService = async ({ admission_id, due_date, amount }) => {
    const [result] = await pool.execute(createInstallmentQuery, [
        admission_id,
        due_date,
        amount
    ]);
    return result;
};

export const getInstallmentsByAdmissionService = async (admission_id) => {
    const [rows] = await pool.execute(getInstallmentsByAdmissionQuery, [admission_id]);
    return rows;
};