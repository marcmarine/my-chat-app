import { connect } from 'react-redux'
import { useState } from 'react'
import { addUserName } from '../../actions'
import { Wrapper, Form, Input } from './styles'
import { Button } from '../../styles'

function Home({ addUserName }) {
  const [newUserName, setNewUserName] = useState(undefined)

  const handleSubmit = event => {
    event.preventDefault()
    addUserName(newUserName)
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input onChange={event => setNewUserName(event.target.value)} id="userName" type="text" autoFocus autoComplete="off" placeholder="Escribe tu nombre..." />
        <Button disabled={(!newUserName || /^\s+$/.test(newUserName))} variant="primary" type="submit">Empezar</Button>
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