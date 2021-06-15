import { Wrapper } from './styles'

function Message({ displayMessage, userName, author }) {
  console.log(userName, author)
  return (
    <Wrapper out={userName === author}>
      {displayMessage}
    </Wrapper>
  )
}

export default Message