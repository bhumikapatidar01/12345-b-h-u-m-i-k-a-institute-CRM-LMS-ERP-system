import express from 'express';
import { createLesson, 
         getLessonsBySubject,
         getLessonById, 
         deleteLesson
        } from './lesson.controller.js';

const router = express.Router();

router.post('/create', createLesson);
router.get('/subject/:subject_id', getLessonsBySubject);
router.get('/:id', getLessonById);
router.delete('/:id', deleteLesson);


export default router;