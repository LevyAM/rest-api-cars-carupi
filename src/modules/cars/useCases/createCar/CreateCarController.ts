import { Request, Response } from "express";
import { CarsRepository } from "../../infra/repositories/implements/CarRepository";
import { CreateCarUseCase } from "./CreateCarUseCase";

class CreateCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      car_id,
      brand,
      model,
      version,
      year,
      mileage,
      transmission,
      price,
    } = request.body;

    const createCarUseCase = new CreateCarUseCase(new CarsRepository());

    const car = await createCarUseCase.execute({
      car_id,
      brand,
      model,
      version,
      year,
      mileage,
      transmission,
      price,
    });

    return response.status(201).json(car);
  }
}

export { CreateCarController };
