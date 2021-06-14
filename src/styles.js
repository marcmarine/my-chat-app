import styled from '@emotion/styled'

export const Home = styled.form`
  display: grid;
  height: 100vh;
  place-content: center;
`

export const ChatRoom = styled.div`
  display: grid;
  height: 100vh;
  place-content: center;

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;

    .message {
      max-width: 70%;

      &--out {
        align-self: flex-end;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
  }
`