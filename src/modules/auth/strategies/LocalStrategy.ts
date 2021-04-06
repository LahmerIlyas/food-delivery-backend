import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../database/entities/User';
import { Repository } from 'typeorm';
import { AuthService } from '../auth.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

  @InjectRepository(User)
  private usersRepository: Repository<User>

  @Inject(AuthService)
  private authService: AuthService

  constructor() {
    super({
      usernameField: 'email',
      passwordField: 'password'
    });
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.usersRepository.findOneOrFail({ where: { email: email } });

    const isPasswordMatching = await bcrypt.compare(password, user.hashed_password);

    if (!isPasswordMatching) {
      throw new UnauthorizedException();
    }

    return user;
  }
}