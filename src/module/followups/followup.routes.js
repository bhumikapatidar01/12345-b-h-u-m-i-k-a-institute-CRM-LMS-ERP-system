import express from 'express';
import { createFollowups,getAllFollowups,getFollowupById,updateFollowup,deleteFollowup ,addFollowupLog, getFollowupLogs} from './followup.controller.js';

const router = express.Router();

// Followups
router.post('/create', createFollowups);
router.get('/all', getAllFollowups);
router.get('/:id', getFollowupById);
router.put('/:id', updateFollowup);
router.delete('/:id', deleteFollowup);

// Logs (clean REST style)
router.post('/:id/log', addFollowupLog);
router.get('/:id/logs', getFollowupLogs);

export default router;