import { CarsRepositoryInMemory } from "../../repositories/inmemory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "../createCar/CreateCarUseCase";
import { ListCarUseCase } from "./ListCarUseCase";
import { v4 as uuid } from "uuid";

let createCarUseCase: CreateCarUseCase;
let listCarUseCase: ListCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarUseCase = new ListCarUseCase(carsRepositoryInMemory);
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to list all cars", async () => {
    let car1 = await createCarUseCase.execute({
      brand: "Fiat",
      model: "uno mille",
      version: "Fiat Uno Mille 1.0 Fire duas portas",
      year: 2001,
      mileage: 50000,
      transmission: "manual",
      price: "10000",
    });

    let car2 = await createCarUseCase.execute({
      brand: "Fiat",
      model: "Grazie Mille",
      version: "Fiat Grazie Mille 1.0 Fire quatro portas",
      year: 2013,
      mileage: 23000,
      transmission: "manual",
      price: "26190",
    });

    let cars = await listCarUseCase.execute();

    expect(cars[0]).toMatchObject({
      brand: "Fiat",
      model: "uno mille",
      version: "Fiat Uno Mille 1.0 Fire duas portas",
      year: 2001,
      mileage: 50000,
      transmission: "manual",
      price: "10000",
    });
    expect(cars[1]).toMatchObject({
      brand: "Fiat",
      model: "Grazie Mille",
      version: "Fiat Grazie Mille 1.0 Fire quatro portas",
      year: 2013,
      mileage: 23000,
      transmission: "manual",
      price: "26190",
    });
  });
});
