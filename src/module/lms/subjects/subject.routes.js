import express from 'express';
import { 
    createSubject,
    getAllSubjects,
    getSubjectById,
    updateSubject,
    deleteSubject
} from './subject.controller.js';

const router = express.Router();

router.post('/create', createSubject);
router.get('/all', getAllSubjects);
router.get('/:id', getSubjectById);
router.put('/:id', updateSubject);
router.delete('/:id', deleteSubject);

export default router;