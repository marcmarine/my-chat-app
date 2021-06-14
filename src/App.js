import { useState } from 'react'
function App() {
  const [messages, setMessages] = useState([])
  const handleSubmit = event => {
    event.preventDefault()
    setMessages([ ...messages, event.target['message'].value])
  }
  return (
    <>
    <ul>
      {messages.map(message => <li>{message}</li>)}
    </ul>
    <form onSubmit={handleSubmit}>
      <input id="message" type="text" placeholder="Escribe un mensaje..." />
      <button type="submit">Enviar</button>
    </form>
    </>
  )
}

export default App;
