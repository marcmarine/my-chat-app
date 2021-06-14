import { combineReducers } from 'redux'
import messages from './messages'
import users from './users'

const reducer = combineReducers({
  messages,
  userName: users
})

export default reducer
