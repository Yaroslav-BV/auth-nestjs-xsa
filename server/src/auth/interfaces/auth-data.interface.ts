import { ApiProperty } from '@nestjs/swagger'

export class AuthData {
  @ApiProperty({ description: 'User id' })
  id: string

  @ApiProperty({ description: 'First name' })
  firstName: string

  @ApiProperty({ description: 'Last name' })
  lastName: string

  @ApiProperty({ description: 'Email' })
  email: string

  @ApiProperty({ description: 'Scopes' })
  scopes: string[]
}
