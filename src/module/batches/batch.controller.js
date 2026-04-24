import {
  createBatchService,
  getAllBatchesService,
  getBatchByIdService,
  updateBatchService,
  deleteBatchService
} from "./batch.services.js";


export const createBatch = async (req, res, next) => {
  try {
    const batch = await createBatchService(req.body);
    res.status(201).json({ success: true, data: batch });
  } catch (error) {
    next(error);
  }
};

export const getAllBatches = async (req, res, next) => {
  try {
    const batches = await getAllBatchesService();
    res.json({ success: true, data: batches });
  } catch (error) {
    next(error);
  }
};

export const getBatchById = async (req, res, next) => {
  try {
    const batch = await getBatchByIdService(req.params.id);

    if (!batch) {
      return res.status(404).json({
        success: false,
        message: "Batch not found"
      });
    }

    res.json({ success: true, data: batch });
  } catch (error) {
    next(error);
  }
};

export const updateBatch = async (req, res, next) => {
  try {
    const batch = await updateBatchService(req.params.id, req.body);

    if (!batch) {
      return res.status(404).json({
        success: false,
        message: "Batch not found"
      });
    }

    res.json({ success: true, data: batch });
  } catch (error) {
    next(error);
  }
};

export const deleteBatch = async (req, res, next) => {
  try {
    const batch = await deleteBatchService(req.params.id);

    if (!batch) {
      return res.status(404).json({
        success: false,
        message: "Batch not found"
      });
    }

    res.json({ success: true, message: "Batch deleted successfully" });
  } catch (error) {
    next(error);
  }
};