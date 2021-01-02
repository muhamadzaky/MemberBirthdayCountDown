import React, { Component } from 'react'
import { Layout, message, Typography } from 'antd'
import { HeartFilled } from '@ant-design/icons'
import { enquireScreen } from 'enquire-js'
import { Redirect, Route, Router, Switch } from 'react-router-dom'
import { api } from '../common/service/api'
import { uriByENV } from '../common/general-function'
import moment from 'moment'
import history from '../common/history'
import Landing from './Home/Landing'
import GroupDetail from './Group/GroupDetail'
import MemberDetail from './Member/MemberDetail'
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
    groupData: []
  }

  componentWillMount() {
    this.setState({ isLoading: true });
    api.get("/list/group")
    .then(res => {
      this.setState({ groupData: res.data, isLoading: false, dataLoaded: true });
    })
    .catch(() => {
      this.setState({ isLoading: false, dataLoaded: false });
      message.error('Failed to get data', 2.5).then(() => message.loading('Page will be reloaded in 5 secs', 5)).then(() => { message.destroy(); window.location.reload() });
    })
  }
  

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    })
  }

  render() {
    const { Footer, Content } = Layout;
    const { env, isMobile } = this.state;
    const { Link } = Typography;
    return (
      <Layout>
        <Content>
          <Router history={history}>
            <Switch>
              <Redirect exact from="/" to={uriByENV(env)} />
              <Route exact path={uriByENV(env)} render={props => <Landing {...props} {...this.state} isMobile={isMobile} logo={logo} />} />
              <Route exact path={`${uriByENV(env)}group-detail`} render={props => <GroupDetail {...props} env={env} isMobile={isMobile} />} />
              <Route exact path={`${uriByENV(env)}member-detail`} render={props => <MemberDetail {...props} env={env} isMobile={isMobile} />} />
            </Switch>
          </Router>
        </Content>
        <Footer style={{ background: 'white', textAlign: isMobile ? 'center' : 'left', fontSize: isMobile ? 12 : 14 }}>
          &copy;{ moment(new Date()).format('YYYY') } - Developed with <HeartFilled style={{ color: '#ea4c89' }} /> by Muhamad Zaky 
          {/* - Powered by <Link href="http://stage48.net/wiki/index.php/Main_Page" target="_blank" strong>Stage48</Link> */}
        </Footer>
      </Layout>
    )
  }
}

export default App;
