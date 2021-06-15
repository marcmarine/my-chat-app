export function addMessage(message) {
  return {
    type: 'NEW_MESSAGE',
    payload: message
  }
}

export function addUserName(name) {
	return {
		type: 'NEW_USER_NAME',
		payload: name
	}
}

export function deleteUser() {
	return {
		type: 'DELETE_USER',
	} 
}

export function deleteAllMessages() {
	return {
		type: 'DELETE_ALL_MESSAGES',
	} 
}