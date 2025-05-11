import express from 'express';
import { getAllWorkers, createWorker, deleteWorker } from '../controllers/workerController.js';

const router = express.Router();

router.get('/', getAllWorkers);
router.post('/', createWorker);
router.delete('/:id', deleteWorker);

export default router;