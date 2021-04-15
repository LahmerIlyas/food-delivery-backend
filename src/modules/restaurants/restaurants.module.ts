import { Module } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsController } from './restaurants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from '../../database/entities/Restaurant';

@Module({
  imports: [
    TypeOrmModule.forFeature([Restaurant]),
  ],
  providers: [RestaurantsService],
  controllers: [RestaurantsController]
})
export class RestaurantsModule {}
