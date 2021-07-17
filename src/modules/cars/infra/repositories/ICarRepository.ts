import { Model, Schema } from "mongoose";
import { ICarDTO } from "../../dtos/ICarDTO";

interface ICarsRepository {
  create({
    brand,
    model,
    version,
    year,
    mileage,
    transmission,
    price,
  }: ICarDTO): Promise<Model<Schema> | ICarDTO>;
}

export { ICarsRepository };
