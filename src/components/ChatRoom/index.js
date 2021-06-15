
import { connect } from 'react-redux'
import { deleteAllMessages, deleteUser } from '../../actions'
import { Wrapper, Header, HeaderInfo, Status, Name } from './styles'
import { Button } from '../Layout/styles'
import MessageList from '../MessageList'
import InputArea from '../InputArea'

function ChatRoom({ clearData }) {
  
  const goBackHome = () => {
    clearData()
  }

  return (
    <Wrapper>
      <Header>
        <Button icon onClick={goBackHome}>
          <svg xmlns="http://www.w3.org/2000/svg" width={20} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 19l-7-7 7-7" />
          </svg>
        </Button>
        <HeaderInfo>
          <Status online />
          <Name>Alberto</Name>
        </HeaderInfo>
      </Header>
      <MessageList />
      <InputArea />
    </Wrapper>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    clearData: () => {
      dispatch(deleteAllMessages())
      dispatch(deleteUser())
    }
  }
} 

export default connect(null, mapDispatchToProps)(ChatRoom)
