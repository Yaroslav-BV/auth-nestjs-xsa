import { Controller, Get } from '@nestjs/common'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { User } from './decorators/user.decorator'
import { AuthData } from './interfaces/auth-data.interface'

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  @Get('user')
  @ApiOperation({ summary: 'Get authorization user data' })
  @ApiOkResponse({
    description: 'Authorization user data',
    type: AuthData,
  })
  user(@User() user: AuthData): AuthData {
    return user
  }
}
