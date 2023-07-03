import { AuthData } from './auth/interfaces/auth-data.interface'

declare module 'http' {
  export interface IncomingMessage {
    user?: AuthData
  }
}
