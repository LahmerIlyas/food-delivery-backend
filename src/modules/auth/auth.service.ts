import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../database/entities/User';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {

  @InjectRepository(User)
  private usersRepository: Repository<User>





}
