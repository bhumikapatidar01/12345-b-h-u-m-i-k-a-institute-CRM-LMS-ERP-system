import express from 'express';
import { createTest,
         getTestsBySubject, 
         deleteTest 
        } from './test.controller.js';

const router = express.Router();

router.post('/create', createTest);
router.get('/:subject_id', getTestsBySubject);
router.delete('/:id', deleteTest);

export default router;