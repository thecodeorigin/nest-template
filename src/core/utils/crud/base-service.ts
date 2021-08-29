import {
  DeepPartial,
  DeleteResult,
  FindConditions,
  FindOneOptions,
  ObjectID,
} from "typeorm";
import { BaseFilterDTO } from "@core/dto/filter-many";
import { BaseCrudRepository } from "@core/utils/crud/base-repo";

/**
 * @Usage Base service class for crud purposes. Please extend from this class when creating new service classes and add additional methods if needed.
 */
export class BaseCrudService<T> {
  constructor(private baseRepository: BaseCrudRepository<T>) {}

  createOne(dto: DeepPartial<T>): Promise<T> {
    return this.baseRepository.createOne(dto);
  }

  async findMany(param: BaseFilterDTO) {
    const data = await this.baseRepository.findMany(param);
    const totalPageCount = data[1] / (param.limit || 5);
    const result = {
      data: data[0],
      count: data[0].length,
      total: data[1],
      page: Number(param.page || 1),
      pageCount: Math.ceil(totalPageCount ? totalPageCount : 0),
    };

    return result;
  }

  updateOne(id: number, dto: DeepPartial<T>): Promise<T> {
    return this.baseRepository.updateOne(id, dto);
  }

  deleteOne(id: number, exception = false): Promise<DeleteResult> {
    return this.baseRepository.deleteOne(id, exception);
  }

  /**
   * @Usage Finds first entity that matches given options. Finds first entity that matches given conditions.
   */
  findOneOrFail(
    id?: string | number | Date | ObjectID,
    options?: FindOneOptions<T>,
  ): Promise<T>;
  findOneOrFail(options?: FindOneOptions<T>): Promise<T>;
  findOneOrFail(
    conditions?: FindConditions<T>,
    options?: FindOneOptions<T>,
  ): Promise<T>;

  async findOneOrFail(
    conditions?: any,
    options?: FindOneOptions<T>,
  ): Promise<T> {
    return this.baseRepository.findOneOrFail(conditions, options);
  }

  /**
   * @Usage Finds first entity that matches given conditions.
   */
  findOne(
    id?: string | number | Date | ObjectID,
    options?: FindOneOptions<T>,
  ): Promise<T | undefined>;
  findOne(options?: FindOneOptions<T>): Promise<T>;
  findOne(
    conditions?: FindConditions<T>,
    options?: FindOneOptions<T>,
  ): Promise<T | undefined>;

  async findOne(
    conditions?: any,
    options?: FindOneOptions<T>,
  ): Promise<T | undefined> {
    return this.baseRepository.findOne(conditions, options);
  }
}
