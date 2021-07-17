import { Model, Schema } from "mongoose";
import { ICarDTO } from "../../dtos/ICarDTO";
import { ICarsRepository } from "../../infra/repositories/ICarRepository";

class DeleteCarUseCase {
  constructor(private carRepository: ICarsRepository) {}

  async execute(car_id: string): Promise<Model<Schema>[] | ICarDTO[]> {
    const cars = await this.carRepository.delete(car_id);
    return cars;
  }
}

export { DeleteCarUseCase };
