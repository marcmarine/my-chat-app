import { Wrapper, Screen} from './styles'

function Layout({ children, isHome }) {
  return (
    <Wrapper>
      <Screen isHome={isHome}>
        {children}
      </Screen>
    </Wrapper>
  )
}

export default Layout