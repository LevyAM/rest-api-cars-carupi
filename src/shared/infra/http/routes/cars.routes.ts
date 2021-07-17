import { Router } from "express";
import { ListCarController } from "../../../../modules/cars/useCases/listCar/ListCarController";
import { CreateCarController } from "../../../../modules/cars/useCases/createCar/CreateCarController";
import { DeleteCarController } from "../../../../modules/cars/useCases/deleteCar/DeleteCarController";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listCarController = new ListCarController();
const deleteCarController = new DeleteCarController();

carsRoutes.post("/", createCarController.handle);
carsRoutes.get("/", listCarController.handle);
carsRoutes.delete("/:car_id", deleteCarController.handle);

export { carsRoutes };
