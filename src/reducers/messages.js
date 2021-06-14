const messages = (state = [], action) => {
  switch (action.type) {
    case 'NEW_MESSAGE':
      return state.concat(action.payload)
    default:
      return state
  }
}

export default messages