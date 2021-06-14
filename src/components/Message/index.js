import { Wrapper } from './styles'

function Message({ displayMessage, out }) {
  return (
    <Wrapper out={out}>
      {displayMessage}
    </Wrapper>
  )
}

export default Message