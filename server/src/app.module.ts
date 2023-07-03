import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import appConfig from './configs/app.config'
import xsaServicesConfig from './configs/xsa-services.config'
import { AuthModule } from './auth/auth.module'
import { ExampleModule } from './example/example.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig, xsaServicesConfig],
      isGlobal: true,
    }),
    AuthModule,
    ExampleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
