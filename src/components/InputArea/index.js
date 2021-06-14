import { useState } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import { addMessage } from '../../actions'
import { Wrapper, Input, Button } from './styles'

function InputArea({ addMessage, userName }) {
  const [newMessage, setNewMessage] = useState(undefined)
  
  const handleSubmit = event => {
    event.preventDefault()
    addMessage({
      id: nanoid(12),
      author: userName,
      displayMessage: newMessage,
      publishedAt: new Date()
    })
    event.target['message'].value = ''
    setNewMessage(undefined)
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Input onChange={event => setNewMessage(event.target.value)} id="message" type="text" autoFocus autoComplete="off" placeholder="Escribe un mensaje..." />
      <Button disabled={!newMessage} type="submit">
        <svg xmlns="http://www.w3.org/2000/svg" width={24} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </Button>
    </Wrapper>
  )
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    addMessage: message => dispatch(addMessage(message))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputArea)