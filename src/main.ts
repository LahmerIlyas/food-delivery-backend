import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initSentry } from './core/sentry';
import { setupAdminPanel } from './admin';
import { initSwagger } from './core/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  initSentry(app.getHttpAdapter());
  await setupAdminPanel(app);
  await initSwagger(app);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
