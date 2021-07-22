import { DeepPartial, DeleteResult } from "typeorm";
import { FilterManyDTO } from "@core/dto/filter-many";
import { BaseCrudRepository } from "@core/base/base-crud-repo";
import { GetManyDTO } from "@core/dto/get-many";
import { MINIMUM_PAGINATION_LIMIT } from "@core/environments/env";

export class BaseCrudService<T> {
  constructor(private baseRepository: BaseCrudRepository<T>) {}

  createOne(dto: DeepPartial<T>): Promise<T> {
    return this.baseRepository.createOne(dto);
  }

  async getMany(param: FilterManyDTO): Promise<GetManyDTO<T>> {
    const data = await this.baseRepository.getMany(param);
    const totalPageCount = data[1] / (param.limit || MINIMUM_PAGINATION_LIMIT);
    return {
      data: data[0],
      count: data[0].length,
      total: data[1],
      page: Number(param.page || 1),
      pageCount: Math.ceil(totalPageCount ? totalPageCount : 0),
    };
  }

  getOne(id: number): Promise<T> {
    return this.baseRepository.getOneById(id);
  }

  updateOne(id: number, dto: DeepPartial<T>): Promise<T> {
    return this.baseRepository.updateOne(id, dto);
  }

  deleteOne(id: number): Promise<DeleteResult> {
    return this.baseRepository.deleteOne(id);
  }
}
