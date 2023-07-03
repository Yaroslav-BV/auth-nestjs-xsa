import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { AuthData } from '../interfaces/auth-data.interface'
import { IJwtPayload } from '../interfaces/jwt-payload.interface'
import { getAuthDataFromPayload } from '../auth.helper'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      // Extract jwt from authorization header
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      // Pass the verification key from the configuration UAA
      secretOrKey: configService.get('uaa').verificationkey,
      // Set the algorithm RS256
      algorithms: ['RS256'],
    })
  }

  // Payload it is object with authorization data after JWT validation
  validate(payload: IJwtPayload): AuthData {
    const xsAppName = this.configService.get('uaa').xsappname

    return getAuthDataFromPayload(xsAppName, payload)
  }
}
