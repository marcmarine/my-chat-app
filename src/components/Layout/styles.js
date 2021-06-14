import styled from '@emotion/styled'

const BORDER_RADIUS = '2em'
const COLOR_PRIMARY = 'dodgerblue'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Screen = styled.div`
  background-color: whitesmoke;
  border-radius: ${BORDER_RADIUS};
  height: 30em;
  margin-left: auto;
  margin-right: auto;
  max-width: 30em;
  overflow: hidden;
  padding: 1.5em;
  position: relative;
  transition: all 500ms ease-in-out;
  width: 100%;

  ::before {
    background-color: ${COLOR_PRIMARY};
    box-shadow: 0px .2em 0 0 rgba(0, 0, 0, .1);
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    transition: all 200ms ease-in-out;
    top: 0;
    z-index: 0;
  }

  ${({ isHome }) => isHome ? `
  box-shadow: 0 1em 10em 0 transparent;
  transform: scale(.9);

  ::before {
    height: 100%;
  }
  ` : `
    box-shadow: 0 1em 10em 0 rgba(255, 255, 255, .5);
    transform: scale(1);
    
    ::before {
      height: 4em;
    }
  `}
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: inherit;
  transition: opacity 500ms ease-in-out;
  ${({ disabled, variant }) => `
    opacity: ${disabled ? 0 : 1};
    ${variant === "primary" && `
        background-color: white;
        border-radius: .5em;
        color: ${COLOR_PRIMARY};
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