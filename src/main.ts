import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// swagger
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

// logger
import { AppLogger } from 'src/commons/logger';

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

  await app.listen(process.env.APP_PORT);
}

bootstrap();
