import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    transform: true
  }))

  const config = new DocumentBuilder()
    .setTitle('Clientes')
    .setDescription('Permite gestionar clientes')
    .setVersion('1.0')
    .addTag('Clientes')
    .addTag('Health')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document);
  
  await app.listen(3000);
}
bootstrap();
