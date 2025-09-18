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
  mileage: string;
  features: string[];
  featured: boolean;
}

export const cars: Car[] = [
  {
    id: "1",
    name: "BMW M4 Competition",
    brand: "BMW",
    model: "M4",
    year: 2024,
    price: 89900,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop&crop=faces,center",
    type: "Coupe",
    fuelType: "Gasoline",
    transmission: "Automatic",
    mileage: "16/23 mpg",
    features: ["Carbon Fiber Roof", "M Driver's Package", "Harman Kardon Audio", "Adaptive Suspension"],
    featured: true
  },
  {
    id: "2",
    name: "Mercedes-Benz S-Class",
    brand: "Mercedes-Benz",
    model: "S-Class",
    year: 2024,
    price: 124500,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop&crop=faces,center",
    type: "Sedan",
    fuelType: "Hybrid",
    transmission: "Automatic",
    mileage: "23/28 mpg",
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
    mileage: "17/24 mpg",
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
    mileage: "18/24 mpg",
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
    mileage: "20/25 mpg",
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
    mileage: "15/22 mpg",
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
    mileage: "238 miles range",
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
    mileage: "13/18 mpg",
    features: ["V10 Engine", "All-Wheel Drive", "Carbon Fiber", "Performance Trac"],
    featured: false
  }
];

export const getFeaturedCars = () => cars.filter(car => car.featured);
export const getCarById = (id: string) => cars.find(car => car.id === id);