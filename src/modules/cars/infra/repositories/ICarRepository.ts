import { Model, Schema, Document } from "mongoose";
import { ICarDTO } from "../../dtos/ICarDTO";

interface ICarsRepository {
  create({
    car_id,
    brand,
    model,
    version,
    year,
    mileage,
    transmission,
    price,
  }: ICarDTO): Promise<Model<Schema> | ICarDTO>;
  list(): Promise<Model<Schema>[] | ICarDTO[]>;
}

export { ICarsRepository };
