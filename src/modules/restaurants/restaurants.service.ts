import { Injectable, Logger } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Restaurant } from '../../database/entities/Restaurant';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RestaurantsService extends TypeOrmCrudService<Restaurant>{
  private readonly logger = new Logger(RestaurantsService.name);

  @InjectRepository(Restaurant)
  protected readonly repo: Repository<Restaurant>;

  constructor(@InjectRepository(Restaurant) repository) {
    super(repository);
  }

}
