const users = (state = null, action) => {
  switch (action.type) {
    case 'NEW_USER_NAME':
      return state = action.payload
    case 'DELETE_USER':
      return state = null
    default:
      return state
  }
}

export default users