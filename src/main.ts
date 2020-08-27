import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// swagger
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

// logger
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: new AppLogger(),
  });
  const options = new DocumentBuilder()
    .setTitle('GNP api')
    .setDescription('')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);

  // app.useGlobalPipes(new ValidationPipe())
  await app.listen(process.env.APP_PORT);
}

bootstrap();
