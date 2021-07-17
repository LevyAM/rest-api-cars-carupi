import { model, Schema } from "mongoose";

const carSchema = new Schema({
  car_id: { type: String, unique: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  version: { type: String, required: true },
  year: { type: Number, required: true },
  mileage: { type: Number, required: true },
  transmission: { type: String, required: true },
  price: { type: String, required: true },
});

const carModel = model("Car", carSchema);

export { carSchema, carModel };
