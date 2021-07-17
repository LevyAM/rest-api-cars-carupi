import { Request, Response } from "express";
import { CarsRepository } from "../../infra/repositories/implements/CarRepository";
import { ListCarUseCase } from "./ListCarUseCase";

class ListCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCarUseCase = new ListCarUseCase(new CarsRepository());

    const cars = await listCarUseCase.execute();

    return response.status(200).json(cars);
  }
}

export { ListCarController };
