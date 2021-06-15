const messages = (state = [], action) => {
  switch (action.type) {
    case 'NEW_MESSAGE':
      return state.concat(action.payload)
    case 'DELETE_ALL_MESSAGES':
      return state = []
    default:
      return state
  }
}

export default messages