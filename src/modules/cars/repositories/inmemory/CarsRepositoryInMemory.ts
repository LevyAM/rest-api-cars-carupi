import { Schema, Model } from "mongoose";
import { ICarDTO } from "../../dtos/ICarDTO";
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
    const car = Object.assign({
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

  async delete(car_id: string): Promise<Model<Schema>[] | ICarDTO[]> {
    const deletedCarIndex = this.cars.findIndex((car) => car_id == car_id);

    this.cars.splice(deletedCarIndex, 1);

    return this.cars;
  }
}
export { CarsRepositoryInMemory };
