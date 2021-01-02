import React, { Component } from 'react';
import { parse, stringify } from 'query-string';
import { api } from '../../common/service/api';
import { Avatar, Button, Card, Col, Input, List, Row, Typography } from 'antd';
import { ArrowLeftOutlined, SearchOutlined } from '@ant-design/icons';
import { uriByENV } from '../../common/general-function';
import Animate from 'rc-animate';
import history from '../../common/history';

export default class GroupDetail extends Component {
  state = {
    groupID: 0,
    groupName: "",
    dataGroup: {},
    dataListMember: []
  }

  componentWillMount() {
    const parsedQuery = parse(this.props.location.search)
    this.setState({ groupID: parsedQuery.id, groupName: parsedQuery.name });
    api.get(`/list/group/${parsedQuery.name}`)
    .then(res => {
      this.setState({ dataGroup: res.data, dataListMember: res.data.member });
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    const { dataGroup, dataListMember } = this.state;
    const { isMobile, env } = this.props;
    const { Title, Text } = Typography;
    console.log(this.state);
    return (
      <Animate transitionName="fade" transitionAppear>
        <Row key={1} className="container">
          <Col style={{ width: '100%' }}>
            <Row style={{ marginBottom: 20 }}>
              <Button icon={<ArrowLeftOutlined />} type="link" onClick={ () => { history.push("/") } }>Back</Button>
            </Row>
            <Row justify="space-between">
              <Col>
                <Row>
                  <Col className="group-detail-logo-bg">
                    <img src={ (dataGroup.detail || {}).logo } className="group-detail-logo" />
                  </Col>
                  <Col style={{ marginLeft: 20 }}>
                    <Row>
                      <a href={(dataGroup.detail || {}).site} target="_blank">
                        <Title>{dataGroup.name}</Title>
                      </a>
                    </Row>
                    <Row>
                      <Text>{(dataGroup.detail || {}).location}</Text>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col style={{ marginTop: isMobile ? 20 : 0 }}>
                <Input className="custom-input" prefix={<SearchOutlined style={{ color: '#bfbfbf', fontSize: 14 }} />} placeholder="Search" enterButton />
              </Col>
            </Row>
            <Row style={{ marginTop: 20 }}>
              <List
                grid={{ gutter: 16, column: isMobile ? 1 : 4 }}
                dataSource={dataListMember}
                style={{ width: '100%' }}
                renderItem={item => (
                  <List.Item>
                    <Card 
                      style={{ cursor: 'pointer' }}
                      onClick={ 
                        () => { 
                          history.push({
                            pathname: `${uriByENV(env)}member-detail/?${stringify({ name: (item.name || {}).romaji, group: (item.career_info || {}).group, team: (item.career_info || {}).team })}`,
                            state: {
                              data: item,
                              prevUrl: `${this.props.location.pathname}${this.props.location.search}`
                            }
                          });
                        } 
                      }
                    >
                      <Card.Meta
                        avatar={
                          <Avatar size={64} src={item.pict} />
                        }
                        title={(item.name || {}).romaji}
                        description={`${(item.career_info || {}).group} Team ${(item.career_info || {}).team}`}
                      />
                    </Card>
                  </List.Item>
                )}
              />
            </Row>
          </Col>
        </Row>
      </Animate>
    )
  }
}