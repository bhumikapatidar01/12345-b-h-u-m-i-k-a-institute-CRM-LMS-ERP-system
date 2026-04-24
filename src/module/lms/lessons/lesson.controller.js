import { createLessonService,
         getLessonsBySubjectService,
         getLessonByIdService,
         deleteLessonService
        } from './lesson.services.js';

import { success } from '../../../utils/response.js';

export const createLesson = async (req, res, next) => {
    try {
        const result = await createLessonService(req.body);
        return success(res, result, 'Lesson created');
    } catch (err) {
        next(err);
    }
};

export const getLessonsBySubject = async (req, res, next) => {
    try {
        const data = await getLessonsBySubjectService(req.params.subject_id);
        return success(res, data);
    } catch (err) {
        next(err);
    }
};

export const getLessonById = async (req, res, next) => {
    try {
        const data = await getLessonByIdService(req.params.id);
        return success(res, data);
    } catch (err) {
        next(err);
    }
};

export const deleteLesson = async (req, res, next) => {
    try {
        const result = await deleteLessonService(req.params.id);
        return success(res, result, 'Lesson deleted');
    } catch (err) {
        next(err);
    }
};