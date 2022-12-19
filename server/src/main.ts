import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // todo: whitelist specific domains
  app.enableCors();
  await app.listen(parseInt(process.env.PORT, 10) || 3000);
}
bootstrap();
