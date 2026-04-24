import { createPaymentService,
         getAllPaymentsService,
         getPaymentByIdService,
         deletePaymentService,
         createInstallmentService,
         getInstallmentsByAdmissionService
        } from './payment.services.js';

import { success } from '../../utils/response.js'

// PAYMENTS
export const createPayment = async (req, res, next) => {
    try {
        const result = await createPaymentService(req.body);
        return success(res, result, 'Payment created');
    } catch (err) {
        next(err);
    }
};

export const getAllPayments = async (req, res, next) => {
    try {
        const data = await getAllPaymentsService();
        return success(res, data);
    } catch (err) {
        next(err);
    }
};

export const getPaymentById = async (req, res, next) => {
    try {
        const data = await getPaymentByIdService(req.params.id);
        return success(res, data);
    } catch (err) {
        next(err);
    }
};

export const deletePayment = async (req, res, next) => {
    try {
        const result = await deletePaymentService(req.params.id);
        return success(res, result, 'Payment deleted');
    } catch (err) {
        next(err);
    }
};


// INSTALLMENTS
export const addInstallment = async (req, res, next) => {
    try {
        const result = await createInstallmentService(req.body);
        return success(res, result, 'Installment created');
    } catch (err) {
        next(err);
    }
};

export const getInstallments = async (req, res, next) => {
    try {
        const data = await getInstallmentsByAdmissionService(req.params.admission_id);
        return success(res, data);
    } catch (err) {
        next(err);
    }
};