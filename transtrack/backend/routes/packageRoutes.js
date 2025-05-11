import express from 'express';
import {
  createPackage,
  getAllPackages,
  getPackageById,
  updatePackage,
  updatePackageStatus,
  getPackagesByStatus,
  searchPackages
} from '../controllers/packageController.js';

const router = express.Router();

router.post('/', createPackage);
router.get('/', getAllPackages);
router.get('/search', searchPackages);
router.get('/status/:status', getPackagesByStatus);
router.get('/:id', getPackageById);
router.put('/:id', updatePackage);
router.patch('/:id/status', updatePackageStatus);


export default router;