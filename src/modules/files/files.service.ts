import { Logger, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { File } from '../../database/entities/File';

@Injectable()
export class FilesService {

  private readonly logger = new Logger(FilesService.name);


  @InjectRepository(File)
  filesRepository: Repository<File>;


}
