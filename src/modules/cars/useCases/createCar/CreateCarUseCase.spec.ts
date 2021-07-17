import { CarsRepository } from "../../infra/repositories/implements/CarRepository";

import { CreateCarUseCase } from "./CreateCarUseCase";
import { ICarDTO } from "modules/cars/dtos/ICarDTO";
import { ICarsRepository } from "modules/cars/infra/repositories/ICarRepository";
import { CarsRepositoryInMemory } from "../../repositories/inmemory/CarsRepositoryInMemory";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      brand: "Fiat",
      model: "uno mille",
      version: "Fiat Uno Mille 1.0 Fire duas portas",
      year: 2001,
      mileage: 50000,
      transmission: "manual",
      price: "10000",
    });

    // const carBrand = car.brand;

    console.log(car);

    expect(car).toHaveProperty("brand");
    expect(car).toHaveProperty("model");
    expect(car).toHaveProperty("version");
    expect(car).toHaveProperty("year");
    expect(car).toHaveProperty("mileage");
    expect(car).toHaveProperty("transmission");
    expect(car).toHaveProperty("price");
    expect(car).toEqual({
      brand: "Fiat",
      model: "uno mille",
      version: "Fiat Uno Mille 1.0 Fire duas portas",
      year: 2001,
      mileage: 50000,
      transmission: "manual",
      price: "10000",
    });
  });
});
