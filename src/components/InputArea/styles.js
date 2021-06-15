import styled from '@emotion/styled'

export const Wrapper = styled.form`
  position: relative;
  margin-top: -1em;
`

export const Input = styled.input`
  border: none;
  border-radius: 1em;
  box-shadow: 0px .2em 0 0 rgba(0, 0, 0, .1);
  box-sizing: border-box;
  font-size: 1em;
  min-width: none;
  outline: none;
  padding: 1.5em 5.5em 1.5em 1.5em;
  width: 100%;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  bottom: 0;
  color: var(--global--body--backgroundColor);
  ${({ disabled }) => `
  opacity: ${disabled ? 0 : 1};
  cursor: ${disabled ? `default`: `pointer`}`};
  padding: 0 1.5em;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 1em;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  transition: all 200ms ease-in-out;
  
  :hover {
    background-color: var(--global--body--backgroundColor);
    color: white;
  }
`