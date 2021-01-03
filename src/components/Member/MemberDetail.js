import { Button, Col, Row, Typography } from 'antd';
import React, { Component } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import Animate from 'rc-animate';
import TimeCounter from '../TimeCounter';
import history from '../../common/history';
import moment from 'moment';

class MemberDetail extends Component {
  state = {
    memberData: {},
    prevUrl: ""
  }

  componentWillMount() {
    const { memberData, prevUrl } = this.props;
    if (Object.keys(memberData).length === 0 && memberData.constructor === Object) {
      history.push("/");
    } else {
      this.setState({ memberData, prevUrl });
    }
  }

  render() {
    const { isMobile } = this.props;
    const { memberData, prevUrl } = this.state;
    const { Title, Text } = Typography;
    const data = memberData;
    const birthdateString = (data.birthday || {}).date ? data.birthday.date.slice(0, -4) + moment().format('YYYY') : moment().format('MMMM DD, YYYY');
    const birthdate = moment(birthdateString).format('MM DD YYYY, hh:mm');
    const renderContent = () => {
      if (isMobile) {
        return (
          <Row justify="space-around">
            <Col>
              <Row justify="space-around">
                <Col className="member-detail-pict-bg-mobile">
                  <img src={ data.pict } className="member-detail-pict" alt={((data.name || {}) || {}).romaji} />
                </Col>
              </Row>
              <Row justify="space-around" style={{ marginTop: 20 }}>
                { ((data.career_info || {}).graduated  || {}).status === true ? <span className="graduated">Graduated on {moment((data.career_info || {}).graduated.date).format('MMMM DD, YYYY')}</span> : null }
              </Row>
              <Row style={{ marginTop: 20 }}>
                <Col>
                  <Row>
                    <Col style={{ width: '100%' }}>
                      <label>Romaji</label>
                      <Title>{((data.name || {}) || {}).romaji}</Title>
                      Kanji: <Text strong>{(data.name || {}).kanji}</Text><br />
                      Kana: <Text strong>{(data.name || {}).kana}</Text><br />
                      Nickname: <Text strong>{(data.name || {}).nickname ? (data.name || {}).nickname.toString().replace(/,/g, ', ') : null}</Text>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: 30 }}>
                    <Col>
                      <label>Birth Info</label>
                      <Title>{(data.birthday || {}).date}</Title>
                      <Text>{(data.birthday || {}).place}</Text><br />
                      <Text>Current Age: {(data.birthday || {}).current_age} Years Old</Text>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: 20, fontWeight: 'bold' }}>
                    { (data.more || {}).site ? <a href={data.more.site} target="_blank" rel="noreferrer">More Info</a> : null }
                  </Row>
                  <Row style={{ marginTop: 30 }} justify="space-around">
                    <Col style={{ width: '50%' }}>
                      <TimeCounter timeTillDate={`${birthdate}`} timeFormat="MM DD YYYY, hh:mm" />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        )
      } else {
        return (
          <Row justify="space-between">
            <Col className="member-detail-pict-bg" span={6}>
              <img src={ data.pict } className="member-detail-pict" alt={(data.name || {}).romaji} />
            </Col>
            <Col span={17} gutter={1}>
              <Row>
                <Col span={12}>
                  <label>Romaji</label>
                  <Title>{(data.name || {}).romaji}</Title>
                  Kanji: <Text strong>{(data.name || {}).kanji}</Text><br />
                  Kana: <Text strong>{(data.name || {}).kana}</Text><br />
                  Nickname: <Text strong>{(data.name || {}).nickname ? (data.name || {}).nickname.toString().replace(/,/g, ', ') : null}</Text>
                </Col>
                <Col span={12}>
                  <label>Birth Info</label>
                  <Title>{(data.birthday || {}).date}</Title>
                  <Text>{(data.birthday || {}).place}</Text><br />
                  <Text>Current Age: {(data.birthday || {}).current_age} Years Old</Text>
                </Col>
              </Row>
              <Row style={{ marginTop: 20, marginBottom: 20 }}>
                { ((data.career_info || {}).graduated  || {}).status === true ? <span className="graduated">Graduated on {moment((data.career_info || {}).graduated.date).format('MMMM DD, YYYY')}</span> : null }
              </Row>
              <Row style={{ marginTop: 20, fontWeight: 'bold' }}>
                { (data.more || {}).site ? <a href={data.more.site} target="_blank" rel="noreferrer">More Info</a> : null }
              </Row>
              <Row style={{ marginTop: 30 }} justify="space-around">
                <Col>
                  <TimeCounter timeTillDate={`${birthdate}`} timeFormat="MM DD YYYY, hh:mm" />
                </Col>
              </Row>
            </Col>
          </Row>
        )
      }
    }

    return (
      <Animate transitionName="fade" transitionAppear>
        <Row key={1} className="container">
          <Col style={{ width: '100%' }}>
            <Row style={{ marginBottom: 20, marginTop: 20 }}>
              <Button icon={<ArrowLeftOutlined />} type="link" onClick={ () => { history.push(prevUrl) } }>Back</Button>
            </Row>
            { renderContent() }
          </Col>
        </Row>
      </Animate>
    )
  }
}

export default withRouter(MemberDetail);