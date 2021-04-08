import { User, UserRole } from '../../src/database/entities/User';
import * as bcrypt from 'bcrypt';
import { Configuration } from '../../src/config/Configuration';

const users = [
  {
    name: 'Admin',
    email: 'admin@gmail.com',
    role: UserRole.ADMIN,
    hashed_password: bcrypt.hashSync('123', Configuration.bcryptSaltRounds),
    avatar: {
      path: 'profile.png',
      alt: 'user-profile-picture',
      mime_type: 'image/png',
      name: 'profile.png',
      size: 1024
    }
  }
] as User[];

export async function seedUsers(){
  await User.save(users);
}