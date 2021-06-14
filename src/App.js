import { connect } from 'react-redux'
import Layout from './components/Layout'
import Home from './components/Home'
import ChatRoom from './components/ChatRoom'

function App({ userName }) {

  return (
    <Layout isHome={!userName}>
      {!userName ? <Home /> : <ChatRoom />}
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    userName: state.userName
  }
}

export default connect(mapStateToProps)(App)
