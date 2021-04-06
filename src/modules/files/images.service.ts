import { Injectable, Logger } from '@nestjs/common';
import { Request, Response } from 'express';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Configuration } from '../../config/Configuration';
import { File } from '../../database/entities/File';

const ImageSteam = require('image-steam');

@Injectable()
export class ImagesService {

  private readonly logger = new Logger(ImagesService.name);

  @InjectRepository(File)
  filesRepository: Repository<File>

  private imageServiceHandler: any;

  constructor() {
    this.imageServiceHandler = new ImageSteam
      .http
      .Connect(Configuration.imagesteam);
    this.imageServiceHandler.on('warn', msg => this.logger.warn('isteam:', msg.stack || msg));
    this.imageServiceHandler.on('error', msg => this.logger.error('isteam:', msg.stack || msg));
  }

  public async streamImage(req: Request, res: Response){
    this.imageServiceHandler.getHandler()(req, res);
  }

}
