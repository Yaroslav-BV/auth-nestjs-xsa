import { AuthData } from './interfaces/auth-data.interface'
import { IJwtPayload } from './interfaces/jwt-payload.interface'

export const getAuthDataFromPayload = (
  xsAppName: string,
  payload: IJwtPayload
): AuthData => {
  /**
   * Remove the application name from the scope name
   * In our case, the name will look like this:
   * $XSAPPNAME.View -> example-app.View -> View
   * $XSAPPNAME.Edit -> example-app.Edit -> Edit
   */
  const scopes = payload?.scope.map(scope => scope.replace(`${xsAppName}.`, ''))
  // Remove openid scope
  scopes.splice(scopes.indexOf('openid'), 1)

  return {
    id: payload?.user_name,
    firstName: payload?.given_name,
    lastName: payload?.family_name,
    email: payload?.email,
    scopes,
  }
}
