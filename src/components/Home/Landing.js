import React, { Component } from 'react';
import { Card, Col, Divider, List, Row, Typography } from 'antd';
import { uriByENV } from '../../common/general-function';
import { stringify } from 'query-string';
import { withRouter } from 'react-router-dom';
import Animate from 'rc-animate';
import logoReact from '../../assets/image/logo.svg';
import history from '../../common/history';

class Landing extends Component {
  render() {
    const { dataLoaded, groupData, env, isMobile } = this.props;
    const { Title, Text } = Typography;
    if (!dataLoaded) {
      return (
        <Animate transitionName="fade" transitionAppear>
          <Row key="1" justify="space-around" align="middle" style={{ height: '92vh' }}>
            <Col>
              <Row>
                <img src={logoReact} className="App-logo" alt="logo" />
              </Row>
              <Row justify="space-around" align="middle">
                <Text style={{ color: '#61dafb', fontSize: 24 }} strong>Loading Data ...</Text>
              </Row>
            </Col>
          </Row>
        </Animate>
      )
    } else {
      return (
        <Animate transitionName="fade" transitionAppear>
          <Row key="2" justify="space-around" align="middle">
            <Col style={{ width: '80%' }}>
              <Row style={{ marginTop: 20 }} justify="space-around">
                <Title>Welcome!</Title>
              </Row>
              <Row justify="space-around">
                <Col style={{ width: '100%' }}>
                  {
                    groupData.map(item => (
                        <Row justify="space-around" style={{ marginTop: 30 }}>
                          <Col>
                            <Row justify="space-around">
                              <Title level={3}>{item.category}</Title>
                            </Row>
                            <Row justify="space-around">
                              {/* ubah value column saat data sudah banyak */}
                              <List
                                grid={{ gutter: 16, column: isMobile ? 2 : item.group.length }}
                                dataSource={item.group}
                                renderItem={dt => (
                                  <List.Item>
                                    <Card 
                                      title={dt.category} 
                                      onClick={ () => { 
                                            history.push(`${uriByENV(env)}group/?${stringify({ id: dt.id, name: dt.name })}`) 
                                          } 
                                        }
                                      style={{ cursor: 'pointer' }}  
                                    >
                                      <Row>
                                        <img src={dt.logo} className="group-logo" alt={dt.name} />
                                      </Row>
                                      <Row justify="space-around">
                                        <Divider className="custom-divider" />
                                        <Text>{dt.name}</Text>
                                      </Row>
                                    </Card>
                                  </List.Item>
                                )}
                              />
                            </Row>
                          </Col>
                        </Row>
                    ))
                  }
                </Col>
              </Row>
            </Col>
          </Row>
        </Animate>
      )
    }
  }
}

export default withRouter(Landing);