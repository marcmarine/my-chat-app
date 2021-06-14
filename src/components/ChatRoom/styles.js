import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  place-content: center;

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`