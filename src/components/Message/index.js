import { Wrapper } from './styles'

function Message({ displayMessage, userName, author }) {
  return (
    <Wrapper out={userName === author}>
      {displayMessage}
    </Wrapper>
  )
}

export default Message