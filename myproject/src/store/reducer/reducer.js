// const INITIAL_STATE = {
//     name: "Owais",
//     email: "Mohammadowais246@gmail.com"
// }

// export default (state = INITIAL_STATE) => {
//      return state;
//  }
import AuthReducer from './auth_reducer'
import AppReducer from './app_reducer'
import {combineReducers} from 'redux'

export default combineReducers({
    auth:AuthReducer,
    app:AppReducer
})