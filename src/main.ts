import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initSentry } from './core/sentry';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  initSentry(app.getHttpAdapter());


  app.getHttpAdapter().get("/",(req, res) => {
    res.end("Hello world!");
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
