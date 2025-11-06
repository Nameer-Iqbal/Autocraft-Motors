import mongoose from 'mongoose';
import Car from '../models/Car';
import { connectDB, disconnectDB } from '../db/connection';

// Import car data (you can copy this from src/data/cars.ts)
const carsData = [
  {
    id: "0001",
    name: "BMW",
    brand: "BMW",
    model: "X3",
    year: 2019,
    price: 13999,
    image: "/src/assets/Cars/BMW_X3.jpg",
    type: "SUV",
    fuelType: "Diesel",
    transmission: "Automatic",
    driveType: "RHD",
    features: ["5 Door", "5 Seats", "2 Wheel Drive", "10,100 KM", "2000 CC", "Black Color"],
    featured: true
  },
  {
    id: "0002",
    name: "Land Rover",
    brand: "Land Rover",
    model: "Discovery",
    year: 2016,
    price: 13000,
    image: "/src/assets/Cars/Land_Rover_Discovery.jpg",
    type: "SUV",
    fuelType: "Diesel",
    transmission: "Automatic",
    driveType: "RHD",
    features: ["5 Doors", "5 Seats", "4 Wheel Drive","70,200 KM", "2000 CC", "Black Color"],
    featured: true
  },
  {
    id: "0003",
    name: "Toyota",
    brand: "Toyota",
    model: "Land Cruiser",
    year: 2020,
    price: 38500,
    image: "/src/assets/Cars/LandCruiserGrey.jpg",
    type: "SUV",
    fuelType: "Diesel",
    transmission: "Automatic",
    driveType: "RHD",
    features: ["5 Door", "7 Seat", "4WD", "46,338 KM", "4500 CC", "Grey Color"],
    featured: false
  },
  {
    id: "0004",
    name: "Hyundai",
    brand: "Hyundai",
    model: "Tucson",
    year: 2016,
    price: 12000,
    image: "/src/assets/Cars/Tucson.jpg",
    type: "SUV",
    fuelType: "Petrol",
    transmission: "Automatic",
    driveType: "RHD",
    features: ["4 Door", "5 Seats", "2 Wheel Drive", "61,712 KM", "2000 CC", "White Color"],
    featured: true
  },
  {
    id: "0005",
    name: "Toyota",
    brand: "Toyota",
    model: "Hilux",
    year: 2023,
    price: 25800,
    image: "/src/assets/Cars/Hilux.jpg",
    type: "Pickup",
    fuelType: "Diesel",
    transmission: "Automatic",
    driveType: "RHD",
    features: ["4 Door", "5 Seats", "4 Wheel Drive", "3,685 KM", "2800 CC", "Black Color"],
    featured: false
  },
  {
    id: "0006",
    name: "Toyota",
    brand: "Toyota",
    model: "RAV4",
    year: 2025,
    price: 16500,
    image: "/src/assets/Cars/rav4.jpg",
    type: "SUV",
    fuelType: "Petrol",
    transmission: "Automatic",
    driveType: "RHD",
    features: ["5 Door", "5 Seats", "4 Wheel Drive", "1,230 KM", "2000 CC", "Black Color"],
    featured: true
  },
  {
    id: "0007",
    name: "Tesla",
    brand: "Tesla",
    model: "Model 3",
    year: 2023,
    price: 42500,
    image: "/src/assets/Cars/tesla.jpg",
    type: "Sedan",
    fuelType: "Electric",
    transmission: "Automatic",
    driveType: "RHD",
    features: ["4 Door", "5 Seats", "All Wheel Drive", "12,500 KM", "Electric", "White Color"],
    featured: true
  },
  {
    id: "0008",
    name: "Mercedes-Benz",
    brand: "Mercedes-Benz",
    model: "GLC",
    year: 2021,
    price: 35800,
    image: "/src/assets/Cars/mercedes_GLC.jpg",
    type: "SUV",
    fuelType: "Diesel",
    transmission: "Automatic",
    driveType: "RHD",
    features: ["5 Door", "5 Seats", "All Wheel Drive", "24,300 KM", "2000 CC", "Silver Color"],
    featured: false
  },
  {
    id: "0009",
    name: "Audi",
    brand: "Audi",
    model: "Q7",
    year: 2019,
    price: 32000,
    image: "/src/assets/Cars/Audi_Q7.jpg",
    type: "SUV",
    fuelType: "Diesel",
    transmission: "Automatic",
    driveType: "RHD",
    features: ["5 Door", "7 Seats", "All Wheel Drive", "45,800 KM", "3000 CC", "Black Color"],
    featured: false
  },
  {
    id: "0010",
    name: "Toyota",
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    price: 14200,
    image: "/src/assets/Cars/corolla.jpg",
    type: "Sedan",
    fuelType: "Petrol",
    transmission: "Automatic",
    driveType: "RHD",
    features: ["4 Door", "5 Seats", "Front Wheel Drive", "28,900 KM", "1800 CC", "White Color"],
    featured: true
  },
  {
    id: "0011",
    name: "Toyota",
    brand: "Toyota",
    model: "Land Cruiser",
    year: 2021,
    price: 42000,
    image: "/src/assets/Cars/Toyota_Land_Cruiser_Black.jpg",
    type: "SUV",
    fuelType: "Diesel",
    transmission: "Automatic",
    driveType: "RHD",
    features: ["5 Door", "7 Seat", "4WD", "18,200 KM", "4500 CC", "Black Color"],
    featured: true
  },
  {
    id: "0012",
    name: "Mercedes-Benz",
    brand: "Mercedes-Benz",
    model: "G-Wagon",
    year: 2022,
    price: 156000,
    image: "/src/assets/Cars/Mercedes_G_Wagon_Black.jpg",
    type: "SUV",
    fuelType: "Diesel",
    transmission: "Automatic",
    driveType: "RHD",
    features: ["5 Door", "5 Seat", "4WD", "8,500 KM", "3000 CC", "Black Color"],
    featured: true
  },
  {
    id: "0013",
    name: "Mercedes-Benz",
    brand: "Mercedes-Benz",
    model: "G-Wagon",
    year: 2023,
    price: 158000,
    image: "/src/assets/Cars/Mercedes_G_Wagon_Matte_Black.jpg",
    type: "SUV",
    fuelType: "Diesel",
    transmission: "Automatic",
    driveType: "LHD",
    features: ["5 Door", "5 Seat", "4WD", "11,650 KM", "4000 CC", "Black Color"],
    featured: false
  },
  {
    id: "0014",
    name: "Mercedes-Benz",
    brand: "Mercedes-Benz",
    model: "E-350",
    year: 2009,
    price: 9000,
    image: "/src/assets/Cars/Mercedes_E_350.jpg",
    type: "Sedan",
    fuelType: "Petrol",
    transmission: "Automatic",
    driveType: "LHD",
    features: ["4 Door", "5 Seat", "2WD", "34,000 KM", "4000 CC", "Black Color"],
    featured: false
  },
  {
    id: "0015",
    name: "Toyota",
    brand: "Toyota",
    model: "Tundra",
    year: 2019,
    price: 31400,
    image: "/src/assets/Cars/Toyota_Tundra.jpg",
    type: "Pickup",
    fuelType: "Petrol",
    transmission: "Automatic",
    driveType: "LHD",
    features: ["4 Door", "5 Seat", "4WD", "28,500 KM", "5700 CC", "White Color"],
    featured: false
  },
  {
    id: "0016",
    name: "Mercedes-Benz",
    brand: "Mercedes-Benz",
    model: "C-200",
    year: 2010,
    price: 6000,
    image: "/src/assets/Cars/Mercedes_C_200.jpg",
    type: "Sedan",
    fuelType: "Petrol",
    transmission: "Automatic",
    driveType: "LHD",
    features: ["4 Door", "5 Seat", "2WD", "52,000 KM", "2000 CC", "Silver Color"],
    featured: false
  },
  {
    id: "0017",
    name: "Range Rover",
    brand: "Range Rover",
    model: "Vogue",
    year: 2022,
    price: 95600,
    image: "/src/assets/Cars/Range_Rover.jpg",
    type: "SUV",
    fuelType: "Petrol",
    transmission: "Automatic",
    driveType: "LHD",
    features: ["5 Door", "5 Seat", "4WD", "12,300 KM", "3000 CC", "Black Color"],
    featured: true
  },
  {
    id: "0018",
    name: "BMW",
    brand: "BMW",
    model: "X5",
    year: 2020,
    price: 38900,
    image: "/src/assets/Cars/BMW_X5.jpg",
    type: "SUV",
    fuelType: "Diesel",
    transmission: "Automatic",
    driveType: "RHD",
    features: ["5 Door", "5 Seat", "4WD", "32,100 KM", "3000 CC", "White Color"],
    featured: false
  },
  {
    id: "0019",
    name: "BMW",
    brand: "BMW",
    model: "X4",
    year: 2020,
    price: 26000,
    image: "/src/assets/Cars/BMW_X4.jpg",
    type: "SUV",
    fuelType: "Petrol",
    transmission: "Automatic",
    driveType: "LHD",
    features: ["4 Door", "4 Seats", "123,318 KM", "Black Color"],
    featured: false
  }
];

const seedCars = async () => {
  try {
    await connectDB();
    console.log('Connected to MongoDB');

    // Clear existing cars
    await Car.deleteMany({});
    console.log('Cleared existing cars');

    // Insert new cars
    const insertedCars = await Car.insertMany(carsData);
    console.log(`Successfully inserted ${insertedCars.length} cars into the database`);

    await disconnectDB();
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedCars();
