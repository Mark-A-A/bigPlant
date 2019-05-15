import { AuthTypes } from '../Actions'

const initialState = {
  isAuthenticated: false,
  user: {
    name: null,
    id: null,
    email: null
  }
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.loginUserRequest:
      return {
        ...state,
        fetching: true,
        fetched: false,
        user: null,
        isAuthenticated: false
      }
    case AuthTypes.loginUserSuccess:
    return {
      ...state,
      fetching: false,
      fetched: true,
      isAuthenticated: true,
      user: {
        name: "me",
        email: "me@me.com",
        id: 1234,
      }
    }
    case AuthTypes.loginUserError:
      return {
        ...state,
        fetching: false,
        fetched: false,
      }
    case AuthTypes.logOutUser:
      return {
        ...initialState
      }
    default:
      return state
  }
}