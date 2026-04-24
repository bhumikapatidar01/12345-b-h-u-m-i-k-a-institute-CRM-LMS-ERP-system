import express from 'express';
import { 
          createPayment,
          getAllPayments,
          getPaymentById,
          deletePayment, 
          addInstallment,
          getInstallments 
        } from './payment.controller.js';

const router = express.Router();


// Payments
router.post('/create', createPayment);
router.get('/all', getAllPayments);
router.get('/:id', getPaymentById);
router.delete('/:id', deletePayment);

// Installments
router.post('/installment', addInstallment);
router.get('/installment/:admission_id', getInstallments);

export default router;