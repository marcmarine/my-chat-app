import styled from '@emotion/styled'

export const Wrapper = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: column;
  list-style: none;
  margin: 0;
  overflow: auto;
  padding: 2em 0;
  scroll-behavior: smooth;
  
  ::-webkit-scrollbar {
    display: none;
  }
`