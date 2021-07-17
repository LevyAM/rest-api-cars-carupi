import { Request, Response } from "express";
import { CarsRepository } from "../../infra/repositories/implements/CarRepository";

import { DeleteCarUseCase } from "./DeleteCarUseCase";

class DeleteCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { car_id } = request.params;

    const deleteCarUseCase = new DeleteCarUseCase(new CarsRepository());

    const car = await deleteCarUseCase.execute(car_id);

    return response.status(200).json(car);
  }
}

export { DeleteCarController };
