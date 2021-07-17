import { model, Schema, Model, Document } from "mongoose";
import { ICarDTO } from "../../dtos/ICarDTO";
import { carSchema, carModel } from "../../infra/mongoose/Car";
import { ICarsRepository } from "../../infra/repositories/ICarRepository";

class CarsRepositoryInMemory implements ICarsRepository {
  cars: ICarDTO[] = [];

  async create({
    brand,
    model,
    version,
    year,
    mileage,
    transmission,
    price,
  }: ICarDTO): Promise<ICarDTO> {
    let car = Object.assign({
      brand,
      model,
      version,
      year,
      mileage,
      transmission,
      price,
    });

    this.cars.push(car);

    return car;
  }

  async list(): Promise<Model<Schema>[] | ICarDTO[]> {
    return this.cars;
  }
}
export { CarsRepositoryInMemory };
