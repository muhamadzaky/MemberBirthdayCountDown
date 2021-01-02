import { Button, Col, Row, Typography } from 'antd';
import React, { Component } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import Animate from 'rc-animate';
import TimeCounter from '../TimeCounter';
import history from '../../common/history';
import moment from 'moment';

export default class MemberDetail extends Component {
  state = {
    memberData: {}
  }

  componentWillMount() {
    this.setState({ memberData: this.props.location.state.data })
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    const { location } = this.props;
    const { memberData } = this.state;
    const { Title, Text } = Typography;
    const data = memberData;
    const birthdateString = data.birthday.date.slice(0, -4) + moment().format('YYYY')
    const birthdate = moment(birthdateString).format('MM DD YYYY, hh:mm');
    console.log(birthdate)
    return (
      <Animate transitionName="fade" transitionAppear>
        <Row key={1} className="container">
          <Col style={{ width: '100%' }}>
            <Row style={{ marginBottom: 20 }}>
              <Button icon={<ArrowLeftOutlined />} type="link" onClick={ () => { history.push(`${location.state.prevUrl}`) } }>Back</Button>
            </Row>
            <Row justify="space-between">
              <Col className="member-detail-pict-bg" span={6}>
                <img src={ data.pict } className="member-detail-pict" />
              </Col>
              <Col span={17} gutter={1}>
                <Row>
                  <Col span={12}>
                    <label>Romaji</label>
                    <Title>{data.name.romaji}</Title>
                    Kanji: <Text strong>{data.name.kanji}</Text><br />
                    Kana: <Text strong>{data.name.kana}</Text><br />
                    Nickname: <Text strong>{data.name.nickname.toString().replace(/,/g, ', ')}</Text>
                  </Col>
                  <Col span={12}>
                    <label>Birth Info</label>
                    <Title>{data.birthday.date}</Title>
                    <Text>{data.birthday.place}</Text><br />
                    <Text>Current Age: {data.birthday.current_age} Years Old</Text>
                  </Col>
                </Row>
                <Row style={{ marginTop: 20 }}>
                  { data.more.site ? <a href={data.more.site} target="_blank">More Info</a> : null }
                </Row>
                <Row style={{ marginTop: 30 }} justify="space-around">
                  <Col>
                    <TimeCounter timeTillDate={`${birthdate}`} timeFormat="MM DD YYYY, hh:mm" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Animate>
    )
  }
}