import React, { Component } from 'react'
import { Layout, message, Typography } from 'antd'
import { HeartFilled } from '@ant-design/icons'
import { enquireScreen } from 'enquire-js'
import { Route, Router } from 'react-router-dom'
import { api } from '../common/service/api'
import { uriByENV } from '../common/general-function'
import moment from 'moment'
import history from '../common/history'
import Landing from './Home/Landing'
import logo from '../assets/image/logo.png'
import '../assets/scss/App.scss'
import 'antd/dist/antd.css'

let isMobile

enquireScreen((b) => {
  isMobile = b
})

class App extends Component {
  state = {
    isMobile,
    env: 1,

    isLoading: false,
    dataLoaded: false,
    allData: []
  }

  componentWillMount() {
    this.setState({ isLoading: true })
    api.get("/all")
    .then(res => {
      this.setState({ allData: res.data, isLoading: false, dataLoaded: true })
    })
    .catch(() => {
      this.setState({ isLoading: false, dataLoaded: false })
      message.error('Failed to get data', 2.5).then(() => message.loading('Page will be reloaded in 5 secs', 5)).then(() => { message.destroy(); window.location.reload() })
    })
  }
  

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ isMobile: !!b })
    })
  }

  render() {
    const { Footer, Content } = Layout
    const { env } = this.state
    const { Link } = Typography
    return (
      <Layout>
        <Content>
          <Router history={history}>
            <Route exact path={uriByENV(env)} render={props => <Landing {...props} {...this.state} isMobile={isMobile} logo={logo} />} />
          </Router>
        </Content>
        <Footer style={{ background: 'white', textAlign: isMobile ? 'center' : 'left', fontSize: isMobile ? 12 : 14 }}>
          &copy;{ moment(new Date()).format('YYYY') } - Developed with <HeartFilled style={{ color: '#ea4c89' }} /> by Muhamad Zaky - Powered by <Link href="http://stage48.net/wiki/index.php/Main_Page" target="_blank" strong>Stage48</Link>
        </Footer>
      </Layout>
    )
  }
}

export default App;
