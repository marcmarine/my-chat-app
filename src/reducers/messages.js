import * as types from '../constants/ActionTypes'

const messages = (state = [], action) => {
  switch (action.type) {
    case types.NEW_MESSAGE:
      return state.concat(action.payload)
    case types.DELETE_ALL_MESSAGES:
      return state = []
    default:
      return state
  }
}

export default messages