import {
    createSubjectService,
    getAllSubjectsService,  
    getSubjectByIdService,
    updateSubjectService,
    deleteSubjectService
} from './subject.services.js';
import { success } from '../../../utils/response.js';



export const createSubject = async (req, res, next) => {
    try {
        const result = await createSubjectService(req.body);
        return success(res, result, 'Subject created');
    } catch (err) {
        next(err);
    }
};

export const getAllSubjects = async (req, res, next) => {
    try {
        const data = await getAllSubjectsService();
        return success(res, data);
    } catch (err) {
        next(err);
    }
};

export const getSubjectById = async (req, res, next) => {
    try {
        const data = await getSubjectByIdService(req.params.id);
        return success(res, data);
    } catch (err) {
        next(err);
    }
};

export const updateSubject = async (req, res, next) => {
    try {
        const result = await updateSubjectService(req.params.id, req.body);
        return success(res, result, 'Subject updated');
    } catch (err) {
        next(err);
    }
};

export const deleteSubject = async (req, res, next) => {
    try {
        const result = await deleteSubjectService(req.params.id);
        return success(res, result, 'Subject deleted');
    } catch (err) {
        next(err);
    }
};