import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { ImagesService } from './images.service';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Configuration } from '../../config/Configuration';
import { File } from '../../database/entities/File';

@Module({
  imports: [
    TypeOrmModule.forFeature([File]),
    MulterModule.register(Configuration.multer),
  ],
  providers: [FilesService, ImagesService],
  controllers: [FilesController]
})
export class FilesModule {}
