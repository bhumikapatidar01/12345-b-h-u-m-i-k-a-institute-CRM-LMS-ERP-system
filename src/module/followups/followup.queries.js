// Followups
export const createFollowup = `
    INSERT INTO followups (lead_id, followup_date,status)
    VALUES (?, ?, 'pending')
`;

export const getAllFollowup = `
    SELECT * FROM followups ORDER BY followup_date DESC
`;

export const getFollowupById = `
    SELECT * FROM followups WHERE id = ?
`;

export const updateFollowup = `
    UPDATE followups 
    SET followup_date = ?
    WHERE id = ?
`;

export const deleteFollowup = `
    DELETE FROM followups WHERE id = ?
`;


// Logs
export const createFollowupLog = `
    INSERT INTO followup_logs (followup_id, conversation)
    VALUES (?, ?)
`;

export const getLogsByFollowupId = `
    SELECT * FROM followup_logs 
    WHERE followup_id = ?
    ORDER BY created_at DESC
`;