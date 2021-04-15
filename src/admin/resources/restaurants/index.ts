import { Restaurant } from '../../../database/entities/Restaurant';

export const restaurants = {
  resource: Restaurant,
  options: {
    parent: 'Restaurants Management',
    properties: {

    }
  },
};
