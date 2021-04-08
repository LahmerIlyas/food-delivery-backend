import { seedUsers } from './users';

export async function seedDB(){
  await seedUsers();
}