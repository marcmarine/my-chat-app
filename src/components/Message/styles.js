import styled from '@emotion/styled'

export const Wrapper = styled.li`
  max-width: 70%;
  align-self: ${({out}) => out ? `flex-end` : `flex-start` }
`