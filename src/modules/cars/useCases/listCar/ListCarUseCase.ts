import { Model, Schema } from "mongoose";
import { ICarDTO } from "../../dtos/ICarDTO";
import { ICarsRepository } from "../../infra/repositories/ICarRepository";

class ListCarUseCase {
  constructor(private carRepository: ICarsRepository) {}

  async execute(): Promise<Model<Schema>[] | ICarDTO[]> {
    const cars = await this.carRepository.list();
    return cars;
  }
}

export { ListCarUseCase };
