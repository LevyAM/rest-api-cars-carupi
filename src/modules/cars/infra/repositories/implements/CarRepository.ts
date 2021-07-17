import { Document, Model, model, Schema } from "mongoose";
import { ICarDTO } from "../../../dtos/ICarDTO";
import { carSchema } from "../../mongoose/Car";
import { ICarsRepository } from "../ICarRepository";

class CarsRepository implements ICarsRepository {
  private repository = model<ICarDTO>("Car", carSchema);

  async create({
    brand,
    model,
    version,
    year,
    mileage,
    transmission,
    price,
  }: ICarDTO): Promise<Model<Schema> | ICarDTO> {
    const car = await this.repository.create({
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
