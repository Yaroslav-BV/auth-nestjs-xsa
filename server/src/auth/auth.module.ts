import { APP_GUARD } from '@nestjs/core'
import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { JwtStrategy } from './strategy/jwt.strategy'
import { JwtAuthGuard } from './guards/jwt-auth.guard'
import { AccessGuard } from './guards/access.guard'
import { ScopesHTTPGuard } from './guards/scopes-http.guard'
import { AuthController } from './auth.controller'

@Module({
  imports: [PassportModule],
  providers: [
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: AccessGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ScopesHTTPGuard,
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
