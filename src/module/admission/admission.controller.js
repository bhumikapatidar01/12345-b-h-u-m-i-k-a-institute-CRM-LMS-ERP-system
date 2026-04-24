import {
  createAdmissionService,
  getAllAdmissionsService,  
    getAdmissionByIdService,
    updateAdmissionService,
    deleteAdmissionService
} from "./admission.services.js";

export const createAdmission = async (req, res, next) => {
  try {
    const admission = await createAdmissionService(req.body);
    res.status(201).json({ success: true, data: admission });
  } catch (error) {
    next(error);
  }
};

export const getAllAdmissions = async (req, res, next) => {
  try {
    const admissions = await getAllAdmissionsService();
    res.json({ success: true, data: admissions });
  } catch (error) {
    next(error);
  }
};

export const getAdmissionById = async (req, res, next) => {
  try {
    const admission = await getAdmissionByIdService(req.params.id);

    if (!admission) {
      return res.status(404).json({
        success: false,
        message: "Admission not found"
      });
    }

    res.json({ success: true, data: admission });
  } catch (error) {
    next(error);
  }
};

export const updateAdmission = async (req, res, next) => {
  try {
    const admission = await updateAdmissionService(req.params.id, req.body);

    if (!admission) {
      return res.status(404).json({
        success: false,
        message: "Admission not found"
      });
    }

    res.json({ success: true, data: admission });
  } catch (error) {
    next(error);
  }
};

export const deleteAdmission = async (req, res, next) => {
  try {
    const admission = await deleteAdmissionService(req.params.id);

    if (!admission) {
      return res.status(404).json({
        success: false,
        message: "Admission not found"
      });
    }

    res.json({ success: true, message: "Admission deleted successfully" });
  } catch (error) {
    next(error);
  }
};