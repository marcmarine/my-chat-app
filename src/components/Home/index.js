import { connect } from 'react-redux'
import { addUserName } from '../../actions'
import { Wrapper } from './styles'

function Home({ addUserName }) {

  const handleSubmit = event => {
    event.preventDefault()
    addUserName(event.target['userName'].value)
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <input id="userName" type="text" autoFocus placeholder="Escribe tu nombre..." />
      <button type="submit">Empezar</button>
    </Wrapper>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addUserName: (name) => dispatch(addUserName(name))
  }
}

export default connect(null, mapDispatchToProps)(Home)