import { FilterBuilder } from "@core/utils/crud/filter-builder";
import {
  DeepPartial,
  DeleteResult,
  FindConditions,
  FindOneOptions,
  ObjectID,
  Repository,
} from "typeorm";
import { BaseFilterDTO } from "@core/dto/filter-many";
import { NotFoundException } from "@nestjs/common";
import { HTTP_MESSAGE } from "@core/constants/error-message";

/**
 * @Usage Base repository class for crud purposes. Please extend from this class when creating new repository classes and add additional methods if needed.
 */
export class BaseCrudRepository<T> extends Repository<T> {
  createOne(dto: DeepPartial<T>): Promise<T> {
    const entity = this.create(dto);
    return this.save(entity);
  }

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
    try {
      return super.findOneOrFail(conditions, options);
    } catch {
      throw new NotFoundException(HTTP_MESSAGE.NOT_FOUND);
    }
  }

  async findMany(param: BaseFilterDTO): Promise<[T[], number]> {
    return new FilterBuilder(param).getQueryBuilder<T>(this).getManyAndCount();
  }

  async updateOne(id: number, dto: DeepPartial<T>): Promise<T> {
    let entity = await this.findOneOrFail(id);
    entity = {
      ...entity,
      ...dto,
    };
    return this.save(entity);
  }

  async deleteOne(id: number, exception = false): Promise<DeleteResult> {
    if (exception) {
      await this.findOneOrFail(id);
    }
    return this.delete(id);
  }
}
