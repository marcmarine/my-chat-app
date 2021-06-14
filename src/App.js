import { useState } from 'react'
import { Home, ChatRoom } from './styles'

function App() {
  const [messages, setMessages] = useState([])
  const [userName, setUserName] = useState(undefined)
  const [newMessage, setNewMessage] = useState(undefined)

  const handleUserName = event => {
    event.preventDefault()
    setUserName(event.target['userName'].value)
  }

  const handleMessage = event => {
    event.preventDefault()
    setMessages([ ...messages, newMessage])
    event.target['message'].value = ''
    setNewMessage(undefined)
  }

  if (!userName) return (
    <Home onSubmit={handleUserName}>
      <input id="userName" type="text" autoFocus placeholder="Escribe tu nombre..." />
      <button type="submit">Empezar</button>
    </Home>
  )

  return (
    <ChatRoom>
      <ul>
        <li className="message message--in">Buenas tardes {userName}. ¿Qué tal todo?</li>
        {messages.map(message => <li className="message message--out">{message}</li>)}
      </ul>
      <form onSubmit={handleMessage}>
        <input onChange={event => setNewMessage(event.target.value)} id="message" type="text" autoFocus autoComplete="off" placeholder="Escribe un mensaje..." />
        <button disabled={!newMessage} type="submit">Enviar</button>
      </form>
    </ChatRoom>
  )
}

export default App;
