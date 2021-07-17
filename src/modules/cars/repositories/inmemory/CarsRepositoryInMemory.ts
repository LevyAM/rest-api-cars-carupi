import { model, Schema, Model, Document } from "mongoose";
import { ICarDTO } from "../../dtos/ICarDTO";
import { carSchema, carModel } from "../../infra/mongoose/Car";
import { ICarsRepository } from "../../infra/repositories/ICarRepository";
import { v4 as uuid } from "uuid";
class CarsRepositoryInMemory implements ICarsRepository {
  cars: ICarDTO[] = [];

  async create({
    car_id,
    brand,
    model,
    version,
    year,
    mileage,
    transmission,
    price,
  }: ICarDTO): Promise<ICarDTO> {
    let car = Object.assign({
      car_id: uuid(),
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
