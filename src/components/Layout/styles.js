import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Screen = styled.div`
  background-color: whitesmoke;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cg fill='%23dddddd' fill-opacity='0.4'%3E%3Cpath d='M12 0h18v6h6v6h6v18h-6v6h-6v6H12v-6H6v-6H0V12h6V6h6V0zm12 6h-6v6h-6v6H6v6h6v6h6v6h6v-6h6v-6h6v-6h-6v-6h-6V6zm-6 12h6v6h-6v-6zm24 24h6v6h-6v-6z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' width='80' height='80'%3E%3Cpath fill='%23dddddd' fill-opacity='0.4' d='M14 16H9v-2h5V9.87a4 4 0 1 1 2 0V14h5v2h-5v15.95A10 10 0 0 0 23.66 27l-3.46-2 8.2-2.2-2.9 5a12 12 0 0 1-21 0l-2.89-5 8.2 2.2-3.47 2A10 10 0 0 0 14 31.95V16zm40 40h-5v-2h5v-4.13a4 4 0 1 1 2 0V54h5v2h-5v15.95A10 10 0 0 0 63.66 67l-3.47-2 8.2-2.2-2.88 5a12 12 0 0 1-21.02 0l-2.88-5 8.2 2.2-3.47 2A10 10 0 0 0 54 71.95V56zm-39 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm40-40a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM15 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm40 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'%3E%3C/path%3E%3C/svg%3E");
  background-position-x: 4px;
  border-radius: 2em;
  box-sizing: border-box;
  height: 30em;
  margin-left: auto;
  margin-right: auto;
  max-width: 30em;
  overflow: hidden;
  padding: 1.5em;
  position: relative;
  transition: all 500ms ease-in-out;
  width: 100%;

  @media (max-width: 30em) {
    border-radius: 0;
    height: 100vh;
  }

  ::before {
    background-color: var(--global--body--backgroundColor);
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