import { ExecutionContext, Inject, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ExtractJwt } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../database/entities/User';
import { Repository } from 'typeorm';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  private logger = new Logger(JwtAuthGuard.name);

  @Inject(AuthService)
  private authService: AuthService

  @InjectRepository(User)
  private usersRepository: Repository<User>

  constructor() {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    try{
      const accessToken = ExtractJwt.fromAuthHeaderAsBearerToken()(request);
      if (!accessToken)
        throw new UnauthorizedException('Access token is not set');

      // get the user id
      const {id} = await this.authService.validateToken(accessToken);

      // inject the user into the request
      request.user = await this.usersRepository.findOneOrFail(id);

      return true;
    }catch (error){
      this.logger.error(error.message);
      return false;
    }

  }
}
