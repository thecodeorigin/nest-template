import { FilterManyDTO } from "@core/dto/filter-many";
import { Repository, SelectQueryBuilder } from "typeorm";

export class FilterBuilder {
  limit: number;
  offset: number;
  sortList: string[];
  filterList: string[];

  constructor(request_info: FilterManyDTO) {
    this.limit = request_info.limit || 5;
    this.offset =
      request_info.page && request_info.page > 1
        ? (request_info.page - 1) * this.limit
        : 0;
    this.sortList = request_info.sort || [];
    this.filterList = request_info.filter || [];
  }
  public getQueryBuilder<T>(repo: Repository<T>): SelectQueryBuilder<T> {
    let qb: SelectQueryBuilder<T> = repo.createQueryBuilder(
      repo.metadata.targetName,
    );
    qb = this.chainFilter<T>(qb);
    qb = this.chainSort<T>(qb);
    qb = this.chainPaginate<T>(qb);
    return qb;
  }

  private chainFilter<T>(qb: SelectQueryBuilder<T>): SelectQueryBuilder<T> {
    for (let i = 0; i < this.filterList.length; i++) {
      // TODO: Continue with filters
    }
    return qb;
  }

  private chainSort<T>(qb: SelectQueryBuilder<T>): SelectQueryBuilder<T> {
    for (let i = 0; i < this.sortList.length; i++) {
      const sortParams = this.sortList[i].split(",");
      const sortField = sortParams[0];
      const sortOrder = sortParams[1] as "ASC" | "DESC";
      const sortNullOrder = sortParams[2] as "NULLS FIRST" | "NULLS LAST";
      if (i == 0) {
        qb.orderBy(sortField, sortOrder, sortNullOrder);
      } else {
        qb.addOrderBy(sortField, sortOrder, sortNullOrder);
      }
    }
    return qb;
  }

  private chainPaginate<T>(qb: SelectQueryBuilder<T>): SelectQueryBuilder<T> {
    qb.take(this.limit).skip(this.offset);
    return qb;
  }
}
