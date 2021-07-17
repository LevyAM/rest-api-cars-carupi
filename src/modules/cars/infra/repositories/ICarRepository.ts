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
  }: ICarDTO): Promise<ICarDTO>;
}

export { ICarsRepository };
