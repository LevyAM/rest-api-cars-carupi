import { Document, Model, model, Schema } from "mongoose";
import { ICarDTO } from "../../../dtos/ICarDTO";
import { carSchema } from "../../mongoose/Car";
import { ICarsRepository } from "../ICarRepository";
import { v4 as uuid } from "uuid";

class CarsRepository implements ICarsRepository {
  private repository = model<ICarDTO>("Car", carSchema);

  async create({
    car_id,
    brand,
    model,
    version,
    year,
    mileage,
    transmission,
    price,
  }: ICarDTO): Promise<Model<Schema> | ICarDTO> {
    const car = await this.repository.create({
      car_id: uuid(),
      brand,
      model,
      version,
      year,
      mileage,
      transmission,
      price,
    });

    return car;
  }

  async list(): Promise<Model<Schema>[] | ICarDTO[]> {
    const cars = await this.repository.find();
    return cars;
  }
}

export { CarsRepository };
