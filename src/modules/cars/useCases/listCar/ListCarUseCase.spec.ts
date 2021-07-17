import { CarsRepositoryInMemory } from "../../repositories/inmemory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "../createCar/CreateCarUseCase";
import { ListCarUseCase } from "./ListCarUseCase";

let createCarUseCase: CreateCarUseCase;
let listCarUseCase: ListCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarUseCase = new ListCarUseCase(carsRepositoryInMemory);
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to list all cars", async () => {
    const car1 = await createCarUseCase.execute({
      brand: "Fiat",
      model: "uno mille",
      version: "Fiat Uno Mille 1.0 Fire duas portas",
      year: 2001,
      mileage: 50000,
      transmission: "manual",
      price: "10000",
    });

    const car2 = await createCarUseCase.execute({
      brand: "Fiat",
      model: "Grazie Mille",
      version: "Fiat Grazie Mille 1.0 Fire quatro portas",
      year: 2013,
      mileage: 23000,
      transmission: "manual",
      price: "26190",
    });

    expect(car1).toEqual({
      brand: "Fiat",
      model: "uno mille",
      version: "Fiat Uno Mille 1.0 Fire duas portas",
      year: 2001,
      mileage: 50000,
      transmission: "manual",
      price: "10000",
    });

    expect(car2).toEqual({
      brand: "Fiat",
      model: "Grazie Mille",
      version: "Fiat Grazie Mille 1.0 Fire quatro portas",
      year: 2013,
      mileage: 23000,
      transmission: "manual",
      price: "26190",
    });

    expect(car1).not.toEqual(car2);
  });
});
