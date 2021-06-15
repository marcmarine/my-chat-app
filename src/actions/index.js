import * as types from '../constants/ActionTypes'

export function addMessage(message) {
  return {
    type: types.NEW_MESSAGE,
    payload: message
  }
}

export function addUserName(name) {
	return {
		type: types.NEW_USER_NAME,
		payload: name
	}
}

export function deleteUser() {
	return {
		type: types.DELETE_USER_NAME,
	} 
}

export function deleteAllMessages() {
	return {
		type: types.DELETE_ALL_MESSAGES,
	} 
}