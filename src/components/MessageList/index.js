import { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import { addMessage } from '../../actions'
import { Wrapper } from './styles'
import Message from '../Message'

function MessageList({ messages, userName, addMessage }) {
  const listElement = useRef(null)

  useEffect(() => {
    if (listElement.current) {
      listElement.current.scrollTop = listElement.current.scrollHeight
    }
  }, [messages])

  useEffect(() => {
    if (userName) {
      addMessage([{
        id: nanoid(12),
        author: 'chatBot',
        displayMessage: `👋 Buenos días ${userName}. ¿Qué tal todo?`,
        publishedAt: new Date()
      }])
    }
    
  }, [userName, addMessage])

  return (
    <Wrapper ref={listElement}>
      {messages.map(message => (
        <Message
          key={message.id}
          userName={userName}
          { ...message }
        />
      ))}
    </Wrapper>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    addMessage: message => dispatch(addMessage(message))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList)
