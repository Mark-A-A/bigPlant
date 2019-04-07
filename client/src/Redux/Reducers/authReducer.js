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
    case "Authentication Fetching":
      return {
        ...state,
        fetching: true,
        fetched: false,
        user: null,
        isAuthenticated: false
      }
      case "Authentication Success":
      return{
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
      case "Authentication Failure":
      return{
        ...state,
        fetching: false,
        fetched: false,
      } 
    case "log out":
      return initialState
    default:
      return state
  }
}