import { createFollowupService,
         getAllFollowupsService,
         getFollowupByIdService,
         updateFollowupService ,
         deleteFollowupService,
         createFollowupLogService,
         getLogsByFollowupIdService} from "./followup.services.js";
         import { success } from "../../utils/response.js";


// Followups
export const createFollowups = async (req, res, next) => {
    try {
           //console.log(req.body)
        const result = await createFollowupService(req.body);
          //console.log(result)
        return success(res, result, 'Followup created');
    } catch (err) {
        next(err);
    }
};

export const getAllFollowups = async (req, res, next) => {
    try {
        const data = await getAllFollowupsService();
        return success(res, data);
    } catch (err) {
        next(err);
    }
};

export const getFollowupById = async (req, res, next) => {
    try {
        const followup = await getFollowupByIdService(req.params.id);
        const logs = await getLogsByFollowupIdService(req.params.id);

        return success(res, { followup, logs });
    } catch (err) {
        next(err);
    }
};

export const updateFollowup = async (req, res, next) => {
    try {
        const result = await updateFollowupService(req.params.id, req.body);
        return success(res, result, 'Followup updated');
    } catch (err) {
        next(err);
    }
};

export const deleteFollowup = async (req, res, next) => {
    try {
        const result = await deleteFollowupService(req.params.id);
        return success(res, result, 'Followup deleted');
    } catch (err) {
        next(err);
    }
};


// Logs
export const addFollowupLog = async (req, res, next) => {
    try {
        const result = await createFollowupLogService({
            followup_id: req.params.id,
            conversation: req.body.conversation
        });

        return success(res, result, 'Log added');
    } catch (err) {
        next(err);
    }
};

export const getFollowupLogs = async (req, res, next) => {
    try {
        const data = await getLogsByFollowupIdService(req.params.id);
        return success(res, data);
    } catch (err) {
        next(err);
    }
};

