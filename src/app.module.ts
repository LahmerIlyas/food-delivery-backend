import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Configuration, getConfiguration } from './config/Configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { FilesModule } from './modules/files/files.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [getConfiguration]
    }),
    TypeOrmModule.forRoot(Configuration.database),
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'public'),
      serveRoot: '/public',
      renderPath: '*'
    }),
    AuthModule,
    FilesModule
  ],
})
export class AppModule {}
