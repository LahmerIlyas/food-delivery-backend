import { Inject, Injectable } from '@nestjs/common';
import * as FacebookTokenStrategy from 'passport-facebook-token';
import { PassportStrategy } from '@nestjs/passport';
import { User } from '../../../database/entities/User';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { Configuration } from '../../../config/Configuration';

@Injectable()
export class FacebookStrategy extends PassportStrategy(FacebookTokenStrategy){

  @InjectRepository(User)
  private usersRepository: Repository<User>


  @Inject(ConfigService)
  private configService: ConfigService<typeof Configuration>;


  constructor() {
    super(Configuration.fbConfig);
  }

  async validate( accessToken: string, refreshToken: string, profile: any, done: any) {
    return await this.usersRepository.findOneOrFail({where: {facebook_id: profile.id}});
  }

}
