import { SetMetadata } from '@nestjs/common'
import { Scope } from '../enums/scope.enum'

export const SCOPES_KEY = 'scopes'
export const Scopes = (...permissions: Scope[]) =>
  SetMetadata(SCOPES_KEY, permissions)
