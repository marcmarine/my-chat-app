import { connect } from 'react-redux'
import { ThemeProvider, Global } from '@emotion/react'
import Layout from './components/Layout'
import Home from './components/Home'
import ChatRoom from './components/ChatRoom'
import { globalStyles } from './styles'

const theme = {
  // possible improvements
}

function App({ userName }) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Layout isHome={!userName}>
        {!userName ? <Home /> : <ChatRoom />}
      </Layout>
    </ThemeProvider>
  )
}

const mapStateToProps = state => {
  return {
    userName: state.userName
  }
}

export default connect(mapStateToProps)(App)
