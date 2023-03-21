import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function start() {
  const PORT = process.env.PORT || 5050;
  const app = await NestFactory.create(AppModule);

  const accessList = process.env.ORIGIN?.split(',') || 'http://localhost:3000';

  app.enableCors({
    origin: accessList,
    credentials: true,
    allowedHeaders: ['content-type', 'Authorization'],
  });

  const config = new DocumentBuilder()
    .setTitle('Solo Project Blog')
    .setDescription('Documentation')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT, () => console.log('Server started on port ' + PORT));
}

start();
