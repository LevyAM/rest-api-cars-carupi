import { model } from "mongoose";
import { ICarDTO } from "../../../dtos/ICarDTO";
import { CarSchema } from "../../mongoose/Car";
import { ICarsRepository } from "../ICarRepository";

class CarsRepository implements ICarsRepository {
  private repository = model<ICarDTO>("Car", CarSchema);

  async create({
    brand,
    model,
    version,
    year,
    mileage,
    transmission,
    price,
  }: ICarDTO): Promise<ICarDTO> {
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
}

export { CarsRepository };
