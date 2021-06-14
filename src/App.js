import { useState } from 'react'
import Home from './components/Home'
import ChatRoom from './components/ChatRoom'

function App() {
  const [userName, setUserName] = useState(undefined)

  if (!userName) return <Home setUserName={setUserName} />

  return <ChatRoom userName={userName} />
}

export default App
