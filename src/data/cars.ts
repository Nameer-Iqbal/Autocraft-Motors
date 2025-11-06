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
  vehicleCode?: string;
  chasisNumber?: string;
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
    fuelType: "Hybrid",
    transmission: "Automatic",
    driveType: "RHD",
    features: ["5 Door", "5 Seats", "2 Wheel Drive", "2,000 KM", "2500 CC", "Silver Color"],
    featured: false
  },
  {
    id: "0007",
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
    features: ["4 Door", "5 Seats", "4 Wheel Drive", "65,214 KM", "2800 CC", "White Color"],
    featured: false
  },
  {
    id: "0008",
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
    features: ["4 Door", "5 Seats", "4 Wheel Drive", "43,000 KM", "2800 CC", "Grey Color"],
    featured: false
  },
  {
    id: "0009",
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
    features: ["4 Door", "5 Seats", "4 Wheel Drive", "36,904 KM", "2800 CC", "Blue Color"],
    featured: false
  },
  {
    id: "0010",
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
    features: ["4 Door", "5 Seats", "4 Wheel Drive", "41,197 KM", "2800 CC", "Red Color"],
    featured: false
  },
  {
    id: "0011",
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
    features: ["4 Door", "5 Seats", "4 Wheel Drive", "4,900 KM", "2800 CC", "Green Color"],
    featured: true
  },
  {
    id: "0012",
    name: "Toyota",
    brand: "Toyota",
    model: "Land Cruiser",
    year: 2023,
    price: 35000,
    image: "/src/assets/Cars/LandCruiser2023.jpg",
    type: "Pickup",
    fuelType: "Diesel",
    transmission: "Manual",
    driveType: "RHD",
    features: ["4 Door", "5 Seats", "4 Wheel Drive", "27,700 KM", "4500 CC", "Beige Color"],
    featured: false
  },
  {
    id: "0013",
    name: "Mercedes",
    brand: "Mercedes-Benz",
    model: "G-Wagon Gloss Black",
    year: 2022,
    price: 161000,
    image: "/src/assets/Cars/Gwagon.jpg",
    type: "SUV",
    fuelType: "Petrol",
    transmission: "Automatic",
    driveType: "LHD",
    features: ["5 Door", "5 Seats", "11,650 KM", "4000 CC", "Black Color"],
    featured: true
  },
  {
    id: "0014",
    name: "Mercedes",
    brand: "Mercedes-Benz",
    model: "G-Wagon Matte Black",
    year: 2022,
    price: 160000,
    image: "/src/assets/Cars/GwagonMatte.jpg",
    type: "SUV",
    fuelType: "Petrol",
    transmission: "Automatic",
    driveType: "LHD",
    features: ["4 Door", "5 Seats", "34,000 KM", "4000 CC", "Black Color"],
    featured: false
  },
  {
    id: "0015",
    name: "Mercedes E-350",
    brand: "Mercedes-Benz",
    model: "E-350",
    year: 2009,
    price: 9000,
    image: "/src/assets/Cars/MercedesE350.jpg",
    type: "Sedan",
    fuelType: "Petrol",
    transmission: "Automatic",
    driveType: "LHD",
    features: ["4 Door", "5 Seats", "78,000 KM", "3500 CC", "Silver Color"],
    featured: false
  },
  {
    id: "0016",
    name: "Toyota",
    brand: "Toyota",
    model: "Tundra",
    year: 2019,
    price: 31400,
    image: "/src/assets/Cars/Tundra.jpg",
    type: "Pickup",
    fuelType: "Petrol",
    transmission: "Automatic",
    driveType: "LHD",
    features: ["4 Door", "5 Seats", "60,000 KM", "5700 CC", "White Color"],
    featured: false
  },
  {
    id: "0017",
    name: "Mercedes C-200",
    brand: "Mercedes-Benz",
    model: "C-200",
    year: 2010,
    price: 6000,
    image: "/src/assets/Cars/MercedesC200.jpg",
    type: "Sedan",
    fuelType: "Petrol",
    transmission: "Automatic",
    driveType: "LHD",
    features: ["4 Door", "5 Seats", "300,000 KM", "1800 CC", "Grey Color"],
    featured: false
  },
  {
    id: "0018",
    name: "Range Rover",
    brand: "Range Rover",
    model: "Range Rover Sport SVR",
    year: 2022,
    price: 95600,
    image: "/src/assets/Cars/RangeRoverSport.jpg",
    type: "SUV",
    fuelType: "Petrol",
    transmission: "Automatic",
    driveType: "LHD",
    features: ["4 Door", "5 Seats", "41,000 KM", "5000 CC", "White Color"],
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

export const getFeaturedCars = () => cars.filter(car => car.featured);
export const getCarById = (id: string) => cars.find(car => car.id === id);
