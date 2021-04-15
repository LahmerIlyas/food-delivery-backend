import { MealCategory } from '../../../database/entities/MealCategory';

export const mealCategories = {
  resource: MealCategory,
  options: {
    parent: 'Restaurants Management',
    properties: {

    }
  },
};
