export interface Car {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  image: string;
  type: string;
  fuelType: string;
  transmission: string;
  driveType: string;
  features: string[];
  featured: boolean;
}

export const cars: Car[] = [
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
    features: ["5 Door", "5 Seats", "2 Wheel Drive"],
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
    features: ["5 Doors", "5 Seats", "4 Wheel Drive",],
    featured: true
  },
  {
    id: "0003",
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
    features: ["4 Door", "5 Seats", "2 Wheel Drive"],
    featured: true
  },
  {
    id: "0004",
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
    features: ["4 Door", "5 Seats", "4 Wheel Drive"],
    featured: false
  },
  {
    id: "0005",
    name: "Toyota",
    brand: "Toyota",
    model: "RAV4",
    year: 2025,
    price: 16500,
    image: "/src/assets/Cars/rav4.jpg",
    type: "SUV",
    fuelType: "Hybrid",
    transmission: "Automatic",
    driveType: "RHD",
    features: ["5 Door", "5 Seats", "2 Wheel Drive"],
    featured: false
  },
  {
    id: "0006",
    name: "Toyota",
    brand: "Toyota",
    model: "Hilux",
    year: 2018,
    price: 21000,
    image: "/src/assets/Cars/Hilux2018.jpg",
    type: "Pickup",
    fuelType: "Diesel",
    transmission: "Automatic",
    driveType: "RHD",
    features: ["4 Door", "5 Seats", "4 Wheel Drive"],
    featured: false
  },
  {
    id: "0007",
    name: "Toyota",
    brand: "Toyota",
    model: "Hilux SR5",
    year: 2022,
    price: 23000,
    image: "/src/assets/Cars/HiluxSR5.jpg",
    type: "Pickup",
    fuelType: "Diesel",
    transmission: "Automatic",
    driveType: "RHD",
    features: ["4 Door", "5 Seats", "4 Wheel Drive"],
    featured: false
  },
  {
    id: "0008",
    name: "Toyota",
    brand: "Toyota",
    model: "Hilux",
    year: 2019,
    price: 21500,
    image: "/src/assets/Cars/HiluxBlue.jpg",
    type: "Pickup",
    fuelType: "Diesel",
    transmission: "Automatic",
    driveType: "RHD",
    features: ["4 Door", "5 Seats", "4 Wheel Drive"],
    featured: false
  },
  {
    id: "0009",
    name: "Toyota",
    brand: "Toyota",
    model: "Hilux",
    year: 2020,
    price: 23000,
    image: "/src/assets/Cars/HiluxRed.jpg",
    type: "Pickup",
    fuelType: "Diesel",
    transmission: "Automatic",
    driveType: "RHD",
    features: ["4 Door", "5 Seats", "4 Wheel Drive"],
    featured: false
  },
  {
    id: "0010",
    name: "Toyota",
    brand: "Toyota",
    model: "Hilux",
    year: 2022,
    price: 22300,
    image: "/src/assets/Cars/HiluxGreen.jpg",
    type: "Pickup",
    fuelType: "Diesel",
    transmission: "Automatic",
    driveType: "RHD",
    features: ["4 Door", "5 Seats", "4 Wheel Drive"],
    featured: true
  }
];

export const getFeaturedCars = () => cars.filter(car => car.featured);
export const getCarById = (id: string) => cars.find(car => car.id === id);