import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Configuration, getConfiguration } from './config/Configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [getConfiguration]
    }),
    TypeOrmModule.forRoot(Configuration.database),
    AuthModule
  ],
})
export class AppModule {}
