import styled from '@emotion/styled'
import { animate } from '../../styles'

export const Wrapper = styled.li`
  align-self: ${({ out }) => out ? `flex-end` : `flex-start`};
  animation: ${animate.fadeInUp} 400ms ease-in-out;
  background-color: white;
  border-bottom-left-radius: ${({ out }) => out ? `2em` : `1em`};
  border-bottom-right-radius: ${({ out }) => out ? `1em` : `2em`};
  border-top-left-radius: 2em;
  border-top-right-radius: 2em;
  max-width: 70%;
  padding-top: 1em;
  padding-right: ${({ out }) => out ? `1.3em` : `1.6em`};
  padding-left: ${({ out }) => out ? `1.6em` : `1.3em`};
  padding-bottom: 1em;
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

`