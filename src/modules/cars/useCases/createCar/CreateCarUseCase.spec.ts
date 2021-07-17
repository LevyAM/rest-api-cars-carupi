import { CreateCarUseCase } from "./CreateCarUseCase";
import { CarsRepositoryInMemory } from "../../repositories/inmemory/CarsRepositoryInMemory";
import { v4 as uuid } from "uuid";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    let car = await createCarUseCase.execute({
      brand: "Fiat",
      model: "uno mille",
      version: "Fiat Uno Mille 1.0 Fire duas portas",
      year: 2001,
      mileage: 50000,
      transmission: "manual",
      price: "10000",
    });

    expect(car).toHaveProperty("car_id");
    expect(car).toMatchObject({
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
