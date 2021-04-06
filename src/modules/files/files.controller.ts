import { Controller, Get, Inject, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { FilesService } from './files.service';
import { ImagesService } from './images.service';

@Controller('files')
export class FilesController {

  @Inject(FilesService)
  fileService: FilesService;

  @Inject(ImagesService)
  imagesService: ImagesService;

  @Get('images/*')
  public async streamImage(@Req() req: Request, @Res() res: Response){
    await this.imagesService.streamImage(req, res);
  }

}
