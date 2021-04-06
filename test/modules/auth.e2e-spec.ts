import { Test } from '@nestjs/testing';
import * as supertest from 'supertest';
import { INestApplication } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestConfiguration } from '../../src/config/TestConfiguration';
import { Repository } from 'typeorm';
import { User } from '../../src/database/entities/User';
import { AuthModule } from '../../src/modules/auth/auth.module';

describe('AuthService', () => {
  let app: INestApplication;
  let repository: Repository<User>;


  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(TestConfiguration.database),
        AuthModule
      ],
    }).compile();

    app = module.createNestApplication();
    repository = module.get('UserRepository');
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('Test', () => {
    it('should equal 2', async () => {
      const users = await repository.findAndCount();
      expect(users[0].length).toBe(0);
    })
  })
});