import { AuthTypes } from '../Types'

export function loginUserRequest() {
  return {
    type: AuthTypes.loginUserRequest
  }
}
