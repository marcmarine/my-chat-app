import { connect } from 'react-redux'
import { Wrapper } from './styles'
import Message from '../Message'

function MessageList({ messages, userName }) {
  return (
    <Wrapper>
      <Message displayMessage={`👋 Buenas tardes ${userName}. ¿Qué tal todo?`} />
      {messages.map(message => (
        <Message
          key={message.id}
          out
          { ...message }
        />
      ))}
    </Wrapper>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(MessageList)
