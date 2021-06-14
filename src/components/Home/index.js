import { connect } from 'react-redux'
import { addUserName } from '../../actions'
import { Wrapper, Form, Input } from './styles'
import { Button } from '../Layout/styles'

function Home({ addUserName }) {

  const handleSubmit = event => {
    event.preventDefault()
    addUserName(event.target['userName'].value)
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input id="userName" type="text" autoFocus placeholder="Escribe tu nombre..." />
        <Button variant="primary" type="submit">Empezar</Button>
      </Form>
    </Wrapper>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addUserName: (name) => dispatch(addUserName(name))
  }
}

export default connect(null, mapDispatchToProps)(Home)