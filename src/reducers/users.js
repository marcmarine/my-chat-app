import * as types from '../constants/ActionTypes'

const users = (state = null, action) => {
  switch (action.type) {
    case types.NEW_USER_NAME:
      return state = action.payload
    case types.DELETE_USER_NAME:
      return state = null
    default:
      return state
  }
}

export default users