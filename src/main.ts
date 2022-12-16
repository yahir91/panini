import { config as dotenvConfig } from 'dotenv';
dotenvConfig();
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { resolve } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    rawBody: true,
  });
  app.useStaticAssets(resolve('./src/public'));
  app.setBaseViewsDir(resolve('./src/views'));
  app.setViewEngine('hbs');

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  if (/true/i.test(process.env.VAR_ALLOW_SWAGGER)) {
    const config = new DocumentBuilder()
      .setTitle('Panini Api')
      .setDescription('API to Panini')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);
  }

  await app.listen(process.env.VAR_APP_PORT || 3000);
}
bootstrap();
