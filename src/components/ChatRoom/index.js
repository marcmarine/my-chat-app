import { useState } from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../../actions'
import { Wrapper } from './styles'

function ChatRoom({ userName, messages, addMessage }) {
  const [newMessage, setNewMessage] = useState(undefined)
  
  const handleSubmit = event => {
    event.preventDefault()
    addMessage(newMessage)
    event.target['message'].value = ''
    setNewMessage(undefined)
  }

  return (
    <Wrapper>
      <ul>
        <li className="message message--in">Buenas tardes {userName}. ¿Qué tal todo?</li>
        {messages.map((message, index) => <li key={`message${index}`} className="message message--out">{message}</li>)}
      </ul>
      <form onSubmit={handleSubmit}>
        <input onChange={event => setNewMessage(event.target.value)} id="message" type="text" autoFocus autoComplete="off" placeholder="Escribe un mensaje..." />
        <button disabled={!newMessage} type="submit">Enviar</button>
      </form>
    </Wrapper>
  )
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addMessage: (message) => dispatch(addMessage(message))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom)
