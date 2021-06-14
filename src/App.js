import { useState } from 'react'
function App() {
  const [messages, setMessages] = useState([])
  const [userName, setUserName] = useState(undefined)

  const handleUserName = event => {
    event.preventDefault()
    setUserName(event.target['userName'].value)
  }

  const handleMessage = event => {
    event.preventDefault()
    setMessages([ ...messages, event.target['message'].value])
  }

  if (!userName) return (
    <form onSubmit={handleUserName}>
      <input id="userName" type="text" autoFocus placeholder="Escribe tu nombre..." />
      <button type="submit">Empezar</button>
    </form>
  )

  return (
    <>
      <ul>
        <li>Buenas tardes {userName}. ¿Qué tal todo?</li>
        {messages.map(message => <li>{message}</li>)}
      </ul>
      <form onSubmit={handleMessage}>
        <input id="message" type="text" autoFocus placeholder="Escribe un mensaje..." />
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}

export default App;
