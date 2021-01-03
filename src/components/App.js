import React, { Component } from 'react'
import { Col, Layout, message, Row, Typography } from 'antd'
import { HeartFilled } from '@ant-design/icons'
import { enquireScreen } from 'enquire-js'
import { Redirect, Route, Router, Switch, withRouter } from 'react-router-dom'
import { api } from '../common/service/api'
import { reloadAPIError, uriByENV } from '../common/general-function'
import { stringify } from 'query-string'
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
    groupData: [],
    memberData: {},
    prevUrl: ""
  }

  componentWillMount() {
    this.setState({ isLoading: true });
    api.get("/list/group")
    .then(res => {
      this.setState({ groupData: res.data, isLoading: false, dataLoaded: true });
    })
    .catch(() => {
      this.setState({ isLoading: false, dataLoaded: false });
      reloadAPIError();
    })
  }
  
  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    })
  }

  setMemberData = (data, prevUrl) => {
    const { env } = this.state;
    this.setState({ memberData: data, prevUrl }, () => { history.push(`${uriByENV(env)}member/?${stringify({ name: (data.name || {}).romaji, group: (data.career_info || {}).group, team: (data.career_info || {}).team })}`); });
  }

  render() {
    const { Footer, Content, Header } = Layout;
    const { env, isMobile } = this.state;
    const { Link } = Typography;
    return (
      <Layout>
        <Router history={history}>
          <Header>
            <Row justify={isMobile ? "space-around" : "space-between"}>
              <a href={uriByENV(env)}>
                <p className="title-header">Member Birthday Count Down</p>
              </a>
            </Row>
          </Header>
          <Content>
            <Switch>
              <Redirect exact from="/" to={uriByENV(env)} />
              <Route exact path={uriByENV(env)} render={props => <Landing {...props} {...this.state} isMobile={isMobile} logo={logo} />} />
              <Route exact path={`${uriByENV(env)}member`} render={props => <MemberDetail {...props} {...this.state} env={env} isMobile={isMobile} />} />
              <Route exact path={`${uriByENV(env)}group`} render={props => <GroupDetail {...props} setMemberData={this.setMemberData} env={env} isMobile={isMobile} />} />
            </Switch>
          </Content>
          <Footer style={{ background: 'white', textAlign: isMobile ? 'center' : 'left', fontSize: isMobile ? 12 : 14 }}>
            <Row justify={isMobile ? "space-around" : "space-between"}>
              <Col>
                &copy;{ moment(new Date()).format('YYYY') } - Developed with <HeartFilled style={{ color: '#ea4c89' }} /> by Muhamad Zaky 
                {/* - Powered by <Link href="http://stage48.net/wiki/index.php/Main_Page" target="_blank" strong>Stage48</Link> */}
              </Col>
              <Col>
                This is just a prototype, { isMobile ? <br /> : null }<span style={{ fontWeight: 'bold', border: '1px solid red', padding: '5px 10px' }}>source data from <Link href="http://stage48.net/wiki/index.php/Main_Page" target="_blank" strong>Stage48</Link></span>
              </Col>
            </Row>
          </Footer>
        </Router>
      </Layout>
    )
  }
}

export default withRouter(App);
