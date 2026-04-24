import pool from '../../config/db.config.js';
import { createFollowup,
         getAllFollowup,
         getFollowupById ,
         updateFollowup,
         deleteFollowup ,
         createFollowupLog,
         getLogsByFollowupId} from './followup.queries.js';


// Followups
export const createFollowupService = async ({ lead_id, followup_date }) => {
    const [result] = await pool.execute(createFollowup, [
        lead_id,
        followup_date,
    
    ]);
    return result;
};

export const getAllFollowupsService = async () => {
    const [rows] = await pool.execute(getAllFollowup);
    return rows;
};

export const getFollowupByIdService = async (id) => {
    const [rows] = await pool.execute(getFollowupById, [id]);
    return rows[0];
};

export const updateFollowupService = async (id, { followup_date }) => {
    const [result] = await pool.execute(updateFollowup, [
        followup_date,
        id
    ]);
    return result;
};

export const deleteFollowupService = async (id) => {
    const [result] = await pool.execute(deleteFollowup, [id]);
    return result;
};


// Logs
export const createFollowupLogService = async ({ followup_id, conversation }) => {
    const [result] = await pool.execute(createFollowupLog, [
        followup_id,
        conversation
    ]);
    return result;
};

export const getLogsByFollowupIdService = async (followup_id) => {
    const [rows] = await pool.execute(getLogsByFollowupId, [followup_id]);
    return rows;
};