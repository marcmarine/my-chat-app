import { useState } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import { addMessage } from '../../actions'
import { Wrapper } from './styles'

function ChatRoom({ userName, messages, addMessage }) {
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
    <Wrapper>
      <ul>
        <li className="message message--in">Buenas tardes {userName}. ¿Qué tal todo?</li>
        {messages.map(({id, displayMessage}) => <li key={id} className="message message--out">{displayMessage}</li>)}
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
