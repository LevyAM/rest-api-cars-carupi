import { model, Schema, Model } from "mongoose";
import { ICarDTO } from "../../dtos/ICarDTO";
import { carSchema, carModel } from "../../infra/mongoose/Car";
import { ICarsRepository } from "../../infra/repositories/ICarRepository";

class CarsRepositoryInMemory implements ICarsRepository {
  // cars: Model<Schema>[] = [];
  cars: ICarDTO[] = [];
  // cars: carModel = model<ICarDTO>("Car", carSchema);
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
}
export { CarsRepositoryInMemory };
