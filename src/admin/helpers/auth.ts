import { User } from '../../database/entities/User';
import * as bcrypt from 'bcrypt';

export async function authenticateUser(email: string, password: string) {
  const user = await User.findOneOrFail({ where: { email: email } });
  const isPasswordMatching = await bcrypt.compare(
    password,
    user.hashed_password,
  );
  return isPasswordMatching ? user : null;
}
