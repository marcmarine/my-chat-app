
import { Wrapper, Header } from './styles'
import { Button } from '../Layout/styles'
import MessageList from '../MessageList'
import InputArea from '../InputArea'

function ChatRoom() {
  return (
    <Wrapper>
      <Header>
        <Button icon>
          <svg xmlns="http://www.w3.org/2000/svg" width={20} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 19l-7-7 7-7" />
          </svg>
        </Button>
      </Header>
      <MessageList />
      <InputArea />
    </Wrapper>
  )
}

export default ChatRoom
