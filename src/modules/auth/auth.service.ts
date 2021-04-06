import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../database/entities/User';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  @InjectRepository(User)
  private usersRepository: Repository<User>

  @Inject(JwtService)
  private jwtService: JwtService;

}
