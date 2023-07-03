import { NestFactory } from '@nestjs/core'
import { VersioningType } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const configService = app.get(ConfigService)

  app
    .setGlobalPrefix('api')
    .enableVersioning({ type: VersioningType.URI, defaultVersion: '1' })

  const docConfig = new DocumentBuilder()
    .setTitle('Example API')
    .setDescription('REST API for Example Application')
    .setVersion('0.0.1')
    .build()

  const document = SwaggerModule.createDocument(app, docConfig)
  SwaggerModule.setup('/api/docs', app, document)

  await app.listen(configService.get('port'))
}

bootstrap()
