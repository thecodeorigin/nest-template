import { BaseFilterDTO } from "@core/dto/filter-many";
import { Repository, SelectQueryBuilder } from "typeorm";

export class FilterBuilder {
  limit: number;
  offset: number;

  constructor(requestInfo: BaseFilterDTO) {
    this.limit = requestInfo.limit || 5;
    this.offset =
      requestInfo.page && requestInfo.page > 1
        ? (requestInfo.page - 1) * this.limit
        : 0;
  }
  public getQueryBuilder<T>(repo: Repository<T>): SelectQueryBuilder<T> {
    let qb: SelectQueryBuilder<T> = repo.createQueryBuilder(
      repo.metadata.targetName,
    );
    qb = this.chainPaginate<T>(qb);
    return qb;
  }

  private chainPaginate<T>(qb: SelectQueryBuilder<T>): SelectQueryBuilder<T> {
    qb.take(this.limit).skip(this.offset);
    return qb;
  }
}
