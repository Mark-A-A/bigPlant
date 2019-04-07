import { combineReducers }   from 'redux'
// TO DO: Add REducers
import { authReducer } from './authReducer'
// import { comments } from './commentReducer'

const storeState = {
    auth: authReducer,
    comments: {}
}

export const rootReducer = combineReducers(storeState)