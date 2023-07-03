import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common'
import { AuthData } from '../interfaces/auth-data.interface'

@Injectable()
export class AccessGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { user }: { user: AuthData } = context.switchToHttp().getRequest()

    if (!user.scopes.length)
      throw new ForbiddenException(`No app access for user #${user.id}`)

    return true
  }
}
