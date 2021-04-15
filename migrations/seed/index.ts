import { seedUsers } from './users';
import { seedRestaurants } from './restaurants';

export async function seedDB(){
  await seedUsers();
  await seedRestaurants();
}
