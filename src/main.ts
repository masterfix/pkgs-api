import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const apiPrefix = process.env.API_PREFIX || '/api';
  app.setGlobalPrefix(apiPrefix);

  await app.listen(3000);

  process.on('SIGINT', function () {
    console.log('SIGINT gracefully shutting down...');
    app.close();
  });

  process.on('SIGTERM', function () {
    console.log('SIGTERM gracefully shutting down...');
    app.close();
  });
}

bootstrap();
