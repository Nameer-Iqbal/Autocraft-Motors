import mongoose, { Schema, Document } from 'mongoose';

export interface ICar extends Document {
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

const CarSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  type: { type: String, required: true },
  fuelType: { type: String, required: true },
  transmission: { type: String, required: true },
  driveType: { type: String, required: true },
  features: [{ type: String }],
  featured: { type: Boolean, default: false }
});

export default mongoose.model<ICar>('Car', CarSchema);
