import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { AuthData } from '../interfaces/auth-data.interface'

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext): AuthData => {
    const { user }: { user: AuthData } = ctx.switchToHttp().getRequest()

    return data ? user?.[data] : user
  }
)
