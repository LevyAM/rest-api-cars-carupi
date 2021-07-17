import { Router } from "express";
import { ListCarController } from "../../../../modules/cars/useCases/listCar/ListCarController";
import { CreateCarController } from "../../../../modules/cars/useCases/createCar/CreateCarController";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listCarController = new ListCarController();

carsRoutes.post("/", createCarController.handle);
carsRoutes.get("/", listCarController.handle);

export { carsRoutes };
