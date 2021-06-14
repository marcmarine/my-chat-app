import { Wrapper } from './styles'

function Home({ setUserName }) {

  const handleSubmit = event => {
    event.preventDefault()
    setUserName(event.target['userName'].value)
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <input id="userName" type="text" autoFocus placeholder="Escribe tu nombre..." />
      <button type="submit">Empezar</button>
    </Wrapper>
  )
}

export default Home