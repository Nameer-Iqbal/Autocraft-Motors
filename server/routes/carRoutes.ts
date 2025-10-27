import { Router } from 'express';
import {
  getAllCars,
  getCarById,
  getFeaturedCars,
  createCar,
  updateCar,
  deleteCar,
  searchCars
} from '../controllers/carController';

const router = Router();

router.get('/', getAllCars);
router.get('/featured', getFeaturedCars);
router.get('/search', searchCars);
router.get('/:id', getCarById);
router.post('/', createCar);
router.put('/:id', updateCar);
router.delete('/:id', deleteCar);

export default router;
