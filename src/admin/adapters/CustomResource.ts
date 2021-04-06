import { Resource } from '@admin-bro/typeorm';
import { Filter, BaseRecord } from 'admin-bro';

import { BaseEntity } from 'typeorm';
import { convertFilter } from './convertFilter';

export class CustomResource extends Resource {
  private customModel: typeof BaseEntity;

  constructor(model: typeof BaseEntity) {
    super(model);

    this.customModel = model;
  }

  public async find(filter: Filter, params): Promise<Array<BaseRecord>> {
    const { limit = 10, offset = 0, sort = {} } = params;
    const { direction, sortBy } = sort as any;
    const instances = await this.customModel.find({
      where: convertFilter(filter),
      take: limit,
      skip: offset,
      order: {
        [sortBy]: (direction || 'asc').toUpperCase(),
      },
    });
    return instances.map((instance) => new BaseRecord(instance, this));
  }
}
