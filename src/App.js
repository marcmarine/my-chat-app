import { connect } from 'react-redux'
import Home from './components/Home'
import ChatRoom from './components/ChatRoom'

function App({ userName }) {

  if (!userName) return <Home />

  return <ChatRoom />
}

const mapStateToProps = state => {
  return {
    userName: state.userName
  }
}

export default connect(mapStateToProps)(App)
