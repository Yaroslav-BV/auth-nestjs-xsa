import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import xsaServicesConfig from './configs/xsa-services.config'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [xsaServicesConfig],
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
