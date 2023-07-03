import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { SCOPES_KEY } from '../decorators/scope.decorator'
import { Scope } from '../enums/scope.enum'
import { AuthData } from '../interfaces/auth-data.interface'

@Injectable()
export class ScopesHTTPGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredScopes = this.reflector.getAllAndOverride<Scope[]>(
      SCOPES_KEY,
      [context.getHandler(), context.getClass()]
    )

    if (!requiredScopes) return true

    const { user }: { user: AuthData } = context.switchToHttp().getRequest()

    if (!requiredScopes.some(scope => user.scopes.includes(scope)))
      throw new ForbiddenException(`Not enough authority for user #${user.id}`)

    return true
  }
}
