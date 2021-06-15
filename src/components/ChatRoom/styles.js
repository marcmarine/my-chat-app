import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`

export const Header = styled.div`
  align-items: center;
  color: white;
  display: flex;
  padding: .1em 0;
  position: relative;
  z-index: 1;

  h2 {
    line-height: 0;
  }
`

export const HeaderInfo = styled.div`
  align-items: center;
  display: flex;

  > * {
    margin-left: .6em;
  }
`

export const Status = styled.span`
  background-color: ${({ online }) => online ? `#8bc34a` : `#e91e63`};
  border-radius: 50%;
  display: block;
  height: .5em;
  margin-left: .6em;
  width: .5em;
`

export const Name = styled.span`
  font-weight: bold;
`