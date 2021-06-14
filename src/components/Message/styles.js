import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(1em);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Wrapper = styled.li`
  align-self: ${({ out }) => out ? `flex-end` : `flex-start`};
  animation: ${fadeIn} 400ms ease-in-out;
  background-color: white;
  border-bottom-left-radius: ${({ out }) => out ? `2em` : `1em`};
  border-bottom-right-radius: ${({ out }) => out ? `1em` : `2em`};
  border-top-left-radius: 2em;
  border-top-right-radius: 2em;
  max-width: 70%;
  padding: 1em 1.3em;
  line-height: 1.4;
  transition: all 500ms ease-in-out;

  :not(:first-of-type) {
    margin-top: 1em;
  }

  :not(:last-child) {
    ${({ out }) => out ? `border-bottom-right-radius: .4em` : `border-bottom-left-radius: .4em`};
  }
  
  & + & {
    ${({ out }) => out ? `border-top-right-radius: .4em` : `border-top-left-radius: .4em`};
    margin-top: .2em;
  }

  :first-of-type {
    border-bottom-left-radius: 2em;
  }
`