import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

export const globalStyles = css`
  html {
    --global--body--backgroundColor: dodgerblue;
  }

  html[data-theme='dark'] { /* possible improvements */
    --global--body--backgroundColor: black;
  }

  body {
    background-color: var( --global--body--backgroundColor);
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export const animate = {
  fadeIn: keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `,
  fadeInUp: keyframes`
    from {
      opacity: 0;
      transform: translateY(1em);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `
}

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  display: flex;
  font-size: inherit;
  transition: opacity 500ms ease-in-out;
  ${({ disabled, variant }) => `
    opacity: ${disabled ? 0 : 1};
    ${variant === "primary" && `
        background-color: white;
        border-radius: .5em;
        color: var(--global--body--backgroundColor);
        font-weight: bold;
        padding: .8em 2em;
        transition: all 200ms ease-in-out;

        :hover {
          background-color: rgba(255, 255, 255, .2);
          color: white;
        }
      `
    }
  `}
`