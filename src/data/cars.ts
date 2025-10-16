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
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop&crop=faces,center",
    type: "SUV",
    fuelType: "Diesel",
    transmission: "Automatic",
    driveType: "RHD",
    features: ["5 Door", "5 Seats", "2 Wheel Drive"],
    featured: true
  },
  {
    id: "0002",
    name: "Mercedes-Benz S-Class",
    brand: "Mercedes-Benz",
    model: "S-Class",
    year: 2024,
    price: 124500,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop&crop=faces,center",
    type: "Sedan",
    fuelType: "Hybrid",
    transmission: "Automatic",
    driveType: "LHD",
    features: ["Massaging Seats", "Air Suspension", "Burmester Audio", "Night Vision"],
    featured: true
  },
  {
    id: "3",
    name: "Audi RS6 Avant",
    brand: "Audi",
    model: "RS6",
    year: 2024,
    price: 128900,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop&crop=faces,center",
    type: "Wagon",
    fuelType: "Gasoline",
    transmission: "Automatic",
    driveType: "LHD",
    features: ["Quattro AWD", "Sport Exhaust", "Virtual Cockpit", "Dynamic Package"],
    featured: true
  },
  {
    id: "4",
    name: "Porsche 911 Turbo S",
    brand: "Porsche",
    model: "911",
    year: 2024,
    price: 207000,
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop&crop=faces,center",
    type: "Coupe",
    fuelType: "Gasoline",
    transmission: "PDK",
    driveType: "LHD",
    features: ["Turbo Engine", "PDK Transmission", "Sport Chrono", "Ceramic Brakes"],
    featured: false
  },
  {
    id: "5",
    name: "BMW X7 xDrive40i",
    brand: "BMW",
    model: "X7",
    year: 2024,
    price: 79500,
    image: "https://images.unsplash.com/photo-1606611013016-969825c16c3d?w=800&h=600&fit=crop&crop=faces,center",
    type: "SUV",
    fuelType: "Gasoline",
    transmission: "Automatic",
    driveType: "LHD",
    features: ["3rd Row Seating", "Panoramic Roof", "Adaptive Cruise", "Parking Assistant"],
    featured: false
  },
  {
    id: "6",
    name: "Mercedes-AMG GT 63 S",
    brand: "Mercedes-Benz",
    model: "AMG GT",
    year: 2024,
    price: 159500,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop&crop=faces,center",
    type: "Coupe",
    fuelType: "Gasoline",
    transmission: "AMG Speedshift",
    driveType: "LHD",
    features: ["AMG Performance", "Race Mode", "Carbon Fiber", "Track Package"],
    featured: false
  },
  {
    id: "7",
    name: "Audi e-tron GT",
    brand: "Audi",
    model: "e-tron GT",
    year: 2024,
    price: 109800,
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop&crop=faces,center",
    type: "Sedan",
    fuelType: "Electric",
    transmission: "Single Speed",
    driveType: "LHD",
    features: ["Ultra-Fast Charging", "Air Suspension", "Virtual Mirrors", "Regenerative Braking"],
    featured: false
  },
  {
    id: "8",
    name: "Lamborghini Huracán",
    brand: "Lamborghini",
    model: "Huracán",
    year: 2024,
    price: 267000,
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop&crop=faces,center",
    type: "Coupe",
    fuelType: "Gasoline",
    transmission: "Dual-Clutch",
    driveType: "LHD",
    features: ["V10 Engine", "All-Wheel Drive", "Carbon Fiber", "Performance Trac"],
    featured: false
  }
];

export const getFeaturedCars = () => cars.filter(car => car.featured);
export const getCarById = (id: string) => cars.find(car => car.id === id);