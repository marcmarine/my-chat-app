const users = (state = null, action) => {
  switch (action.type) {
    case 'NEW_USER_NAME':
      return state = action.payload
    default:
      return state
  }
}

export default users