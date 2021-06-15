import styled from '@emotion/styled'

export const Wrapper = styled.div`
  color: white;
  display: flex;
  font-size: 1.2em;
  height: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

export const Form = styled.form`
  color: currentColor;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
`

export const Input = styled.input`
  background-color: transparent;
  border: none;
  color: currentColor;
  font-size: 1.4em;
  font-weight: bold;
  padding: .5em;
  text-align: center;
  margin-bottom: 2em;

  ::placeholder {
    color: inherit;
    opacity: .8;
  }

  :focus {
    outline: 0;
  }
`