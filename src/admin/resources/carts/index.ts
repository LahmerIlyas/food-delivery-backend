import { Cart } from '../../../database/entities/Cart';

export const carts = {
  resource: Cart,
  options: {
    parent: 'Users Management',
    properties: {

    }
  },
};
