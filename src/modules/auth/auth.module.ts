import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../database/entities/User';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { Configuration } from '../../config/Configuration';
import { FacebookStrategy } from './strategies/FacebookStrategy';
import { GoogleStrategy } from './strategies/GoogleStrategy';
import { JwtStrategy } from './strategies/JwtStrategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.register(Configuration.jwt),
  ],
  providers: [AuthService, FacebookStrategy, GoogleStrategy, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
