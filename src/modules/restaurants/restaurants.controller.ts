import { Controller, Inject } from '@nestjs/common';
import { Crud, CrudController} from '@nestjsx/crud';
import { Restaurant } from '../../database/entities/Restaurant';
import { RestaurantsService } from './restaurants.service';


@Crud({
  model: {
    type: Restaurant,
  },
  serialize:{
//    get: GetOnePediatricianSerializer,
//    getMany: GetManyPediatriciansSerializer
  },
  routes:{
    exclude: ["updateOneBase", "createManyBase", "createOneBase", "deleteOneBase", "replaceOneBase"]
  },
  query: {
    limit: 5,
    alwaysPaginate: true,
    maxLimit: 20,
    join: {
      state: {
        //eager: true
      }
    }
  }
})
@Controller('api/restaurants')
export class RestaurantsController implements CrudController<Restaurant>{

  @Inject(RestaurantsService)
  service: RestaurantsService;


}
