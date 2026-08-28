import { ValidationPipe, VersioningType } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Versionamento
  app.enableVersioning({
    type: VersioningType.URI,
  })

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Cursso de Nest.js - Tasks API')
    .setDescription('APi desenvolvida durante o cursso de Nest.js - Olavo dev ')
    .setVersion('1.0')
    .build()

  const documentFactory = () => SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, documentFactory)

  // Validações
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(process.env.PORT ?? 3001)
}
bootstrap()
