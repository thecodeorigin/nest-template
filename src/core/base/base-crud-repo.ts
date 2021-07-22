import { NotFoundException } from "@nestjs/common";
import { FilterBuilder } from "@core/utils/filterBuilder/builder";
import { DeepPartial, DeleteResult, Repository } from "typeorm";
import { FilterManyDTO } from "@core/dto/filter-many";

export class BaseCrudRepository<T> extends Repository<T> {
  async createOne(dto: DeepPartial<T>): Promise<T> {
    const entity = this.create(dto);
    return this.save(entity);
  }

  async getMany(param: FilterManyDTO): Promise<[T[], number]> {
    return new FilterBuilder(param).getQueryBuilder<T>(this).getManyAndCount();
  }

  async getOneById(id: number): Promise<T> {
    const entity = await this.findOne(id);
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }

  async updateOne(id: number, dto: DeepPartial<T>): Promise<T> {
    let entity = await this.findOne(id);
    if (!entity) {
      throw new NotFoundException();
    }
    entity = {
      ...entity,
      ...dto,
    };
    return this.save(entity);
  }

  async deleteOne(id: number): Promise<DeleteResult> {
    const entity = await this.findOne(id);
    if (!entity) {
      throw new NotFoundException();
    }
    return this.delete(id);
  }
}
