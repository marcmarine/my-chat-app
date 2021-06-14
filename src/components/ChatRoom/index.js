
import { Wrapper } from './styles'
import MessageList from '../MessageList'
import InputArea from '../InputArea'

function ChatRoom() {
  return (
    <Wrapper>
      <MessageList />
      <InputArea />
    </Wrapper>
  )
}

export default ChatRoom
