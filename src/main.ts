import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);

  // This line is the "magic" that enables your @Matches and @IsUrl rules
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strips out any data that isn't in your DTO
      forbidNonWhitelisted: true, // Throws an error if someone sends extra fields
      transform: true, // Automatically converts types if needed
    }),
  );

  await app.listen(3000);
}
bootstrap();
