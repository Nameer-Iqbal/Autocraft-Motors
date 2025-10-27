import { Request, Response } from 'express';
import Car, { ICar } from '../models/Car';

// Get all cars
export const getAllCars = async (req: Request, res: Response): Promise<void> => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cars' });
  }
};

// Get car by ID
export const getCarById = async (req: Request, res: Response): Promise<void> => {
  try {
    const car = await Car.findOne({ id: req.params.id });
    if (!car) {
      res.status(404).json({ error: 'Car not found' });
      return;
    }
    res.json(car);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch car' });
  }
};

// Get featured cars
export const getFeaturedCars = async (req: Request, res: Response): Promise<void> => {
  try {
    const cars = await Car.find({ featured: true });
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch featured cars' });
  }
};

// Create a new car
export const createCar = async (req: Request, res: Response): Promise<void> => {
  try {
    const car = new Car(req.body);
    await car.save();
    res.status(201).json(car);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create car' });
  }
};

// Update a car
export const updateCar = async (req: Request, res: Response): Promise<void> => {
  try {
    const car = await Car.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!car) {
      res.status(404).json({ error: 'Car not found' });
      return;
    }
    res.json(car);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update car' });
  }
};

// Delete a car
export const deleteCar = async (req: Request, res: Response): Promise<void> => {
  try {
    const car = await Car.findOneAndDelete({ id: req.params.id });
    if (!car) {
      res.status(404).json({ error: 'Car not found' });
      return;
    }
    res.json({ message: 'Car deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete car' });
  }
};

// Search cars
export const searchCars = async (req: Request, res: Response): Promise<void> => {
  try {
    const { brand, type, driveType, minPrice, maxPrice, year } = req.query;
    const query: any = {};

    if (brand) query.brand = brand;
    if (type) query.type = type;
    if (driveType) query.driveType = driveType;
    if (year) query.year = year;

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    const cars = await Car.find(query);
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search cars' });
  }
};
