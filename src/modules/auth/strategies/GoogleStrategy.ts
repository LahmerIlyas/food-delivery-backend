import { Injectable } from '@nestjs/common';
import {Strategy} from 'passport-google-token';
import { PassportStrategy } from '@nestjs/passport';
import { User } from '../../../database/entities/User';
import { Configuration } from '../../../config/Configuration';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google'){

  @InjectRepository(User)
  private usersRepository: Repository<User>

  constructor() {
    super(Configuration.googleConfig);
  }

  async validate( accessToken: string, refreshToken: string, profile: any) {
    return await this.usersRepository.findOneOrFail({where: {google_id: profile.id}});
  }
}
