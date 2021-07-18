import { CarsRepositoryInMemory } from "../../repositories/inmemory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "../createCar/CreateCarUseCase";
import { ListCarUseCase } from "../listCar/ListCarUseCase";
import { DeleteCarUseCase } from "../deleteCar/DeleteCarUseCase";
import { ICarDTO } from "modules/cars/dtos/ICarDTO";
import { stringify } from "uuid";

let createCarUseCase: CreateCarUseCase;
let deleteCarUseCase: DeleteCarUseCase;
let listCarUseCase: ListCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Delete Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
    listCarUseCase = new ListCarUseCase(carsRepositoryInMemory);
    deleteCarUseCase = new DeleteCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to delete a car by car_id", async () => {
    await createCarUseCase.execute({
      brand: "Fiat",
      model: "uno mille",
      version: "Fiat Uno Mille 1.0 Fire duas portas",
      year: 2001,
      mileage: 50000,
      transmission: "manual",
      price: "10000",
    });

    await createCarUseCase.execute({
      brand: "Fiat",
      model: "Grazie Mille",
      version: "Fiat Grazie Mille 1.0 Fire quatro portas",
      year: 2013,
      mileage: 23000,
      transmission: "manual",
      price: "26190",
    });

    const carTest3 = await createCarUseCase.execute({
      brand: "Toyota",
      model: "Corolla Altis Premium Hybrid",
      version: "Toyota Corolla Altis Premium Hybrid",
      year: 2021,
      mileage: 0,
      transmission: "auto",
      price: "146.395,00",
    });

    const carsBeforeDelete = await listCarUseCase.execute();

    const { car_id } = carTest3 as ICarDTO;

    const carsAvailable = await deleteCarUseCase.execute(car_id as string);

    expect(carsAvailable[0]).toMatchObject(carsBeforeDelete[0]);
    expect(carsAvailable[1]).toMatchObject(carsBeforeDelete[1]);
    expect(carsAvailable[2] === carsBeforeDelete[2]).toBeFalsy;
  });
});
