import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


const PORT = process.env.PORT || 3600;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true })); // application context ka bahir implement karna ka tareeqa hai yeh.
  await app.listen(PORT);
}
bootstrap();
