import { Schema } from "mongoose";

const CarSchema = new Schema({
  brand: String,
  model: String,
  version: String,
  year: Date,
  mileage: Number,
  transmission: String,
  price: String,
});

export { CarSchema };
