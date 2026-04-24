import {
        createTestService,
        getTestsBySubjectService,
        deleteTestService
        } from './test.services.js';

import { success } from '../../../utils/response.js';

export const createTest = async (req, res, next) => {
    try {
        const result = await createTestService(req.body);
        return success(res, result, 'Test created');
    } catch (err) {
        next(err);
    }
};

export const getTestsBySubject = async (req, res, next) => {
    try {
        const data = await getTestsBySubjectService(req.params.subject_id);
        return success(res, data);
    } catch (err) {
        next(err);
    }
};

export const deleteTest = async (req, res, next) => {
    try {
        const result = await deleteTestService(req.params.id);          
        return success(res, result, 'Test deleted');
    } catch (err) {
        next(err);
    }
}