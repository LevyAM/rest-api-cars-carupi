import { ICarDTO } from "../../dtos/ICarDTO";
import { ICarsRepository } from "../../infra/repositories/ICarRepository";

class CreateCarUseCase {
  constructor(private carRepository: ICarsRepository) {}

  async execute({
    brand,
    model,
    version,
    year,
    mileage,
    transmission,
    price,
  }: ICarDTO): Promise<ICarDTO> {
    const car = await this.carRepository.create({
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

export { CreateCarUseCase };
