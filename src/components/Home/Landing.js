import React, { Component } from 'react'
import { Avatar, Button, Col, Divider, Input, List, Modal, Row, Typography } from 'antd'
import { LinkOutlined } from '@ant-design/icons'
import { findColorClass } from '../../common/general-function'
import Animate from 'rc-animate'
import logoReact from '../../assets/image/logo.svg'
import moment from 'moment'

class Landing extends Component {
  state = {
    searchKeyword: undefined,
    modalVisible: false,
    dataModalMember: {}
  }

  onSearch = (value) => {
    this.setState({ searchKeyword: value })
  }

  modalVisibility = (data, status) => {
    if (status) {
      this.setState({ dataModalMember: data }, () => { this.setState({ modalVisible: status }) })
    } else {
      this.setState({ modalVisible: status }, () => { this.setState({ dataModalMember: data }) })
    }
  }

  renderModalDetail = () => {
    const { modalVisible, dataModalMember } = this.state
    const item = dataModalMember
    const { Link, Text, Title } = Typography
    const proInfo = item.pro_info
    const agency = ((proInfo || {}).agency || "").split("|")
    const sns = ((proInfo || {}).social || [])
    console.log("data member", item, sns)
    return (
      <Modal
        title={<Title level={3}>Member Detail</Title>}
        visible={modalVisible}
        onOk={() => this.modalVisibility({}, false)}
        onCancel={() => this.modalVisibility({}, false)}
        footer={false}
        width="80%"
      >
        {
          item ? 
          <Row>
            <Col span={5}>
              <img src={(item.pict || "")} style={{ width: 300  }} alt={((item.name || {}).kanji || "N/A")} />
            </Col>
            <Col span={19}>
              <Row>
                <Col span={12}>
                  <Row>
                    <Divider className={`divider-${findColorClass((item.career_info || {}).group || "")}`} />
                    <label>Name</label>
                    <Divider className={`divider-${findColorClass((item.career_info || {}).group || "")}`} />
                  </Row>
                  <Row className="modal-value">
                    <Text>Kanji</Text>
                    <Text style={{ marginLeft: 10 }} strong>{((item.name || {}).kanji || "N/A")}</Text>
                  </Row>
                  <Row className="modal-value">
                    <Text>Kana</Text>
                    <Text style={{ marginLeft: 10 }} strong>{((item.name || {}).kana || "N/A")}</Text>
                  </Row>
                  <Row className="modal-value">
                    <Text>Romaji</Text>
                    <Text style={{ marginLeft: 10 }} strong>{((item.name || {}).romaji || "N/A")}</Text>
                  </Row>
                  <Row className="modal-value">
                    <Text>Nickname</Text>
                    <Text style={{ marginLeft: 10 }} strong>{((item.name || {}).nickname || "N/A")}</Text>
                  </Row>
                </Col>
                <Col span={12}>
                  <Row>
                    <Divider className={`divider-${findColorClass((item.career_info || {}).group || "")}`} />
                    <label>Birth Info</label>
                    <Divider className={`divider-${findColorClass((item.career_info || {}).group || "")}`} />
                  </Row>
                  <Row className="modal-value">
                    <Text>Birthdate</Text>
                    <Text style={{ marginLeft: 10 }} strong>{((item.birthday || {}).date || "N/A")}</Text>
                  </Row>
                  <Row className="modal-value">
                    <Text>Birthplace</Text>
                    <Text style={{ marginLeft: 10 }} strong>{((item.birthday || {}).place || "N/A")}</Text>
                  </Row>
                  <Row className="modal-value">
                    <Text>Romaji</Text>
                    <Text style={{ marginLeft: 10 }} strong>{((item.birthday || {}).blood_type || "N/A")}</Text>
                  </Row>
                  <Row className="modal-value">
                    <Text>Nickname</Text>
                    <Text style={{ marginLeft: 10 }} strong>{((item.birthday || {}).current_age || "N/A")}</Text>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <Row>
                    <Divider className={`divider-${findColorClass((item.career_info || {}).group || "")}`} />
                    <label>Professional Info</label>
                    <Divider className={`divider-${findColorClass((item.career_info || {}).group || "")}`} />
                  </Row>
                  <Row className="modal-value">
                    <Text>Agency</Text>
                    <Link href={agency[1]} target="_blank" style={{ marginLeft: 10 }} strong>{agency ? agency[0] : "N/A"}{agency && agency[1] ? <LinkOutlined /> : null}</Link>
                  </Row>
                  <Row className="modal-value">
                    <Text>SNS</Text>
                    {
                      sns.length > 0 ? sns.map(item => {
                        const splittedSNS = item.split("|")
                        return (
                          <Link href={splittedSNS[1]} target="_blank" style={{ marginLeft: 10 }} strong>{splittedSNS ? splittedSNS[0] : "N/A"}{splittedSNS && splittedSNS[1] ? <LinkOutlined /> : null}</Link>
                        )
                      }) : null
                    }
                  </Row>
                </Col>
                <Col span={12}>
                  <Row>
                    <Divider className={`divider-${findColorClass((item.career_info || {}).group || "")}`} />
                    <label>Birthdat Countdown!</label>
                    <Divider className={`divider-${findColorClass((item.career_info || {}).group || "")}`} />
                  </Row>
                  <Row className="modal-value">
                    <Text style={{ marginLeft: 10 }} strong>{((item.birthday || {}).date || "N/A")}</Text>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          : null
        }
      </Modal>
    )
  }

  render() {
    const { isLoading, dataLoaded, allData } = this.props
    const { Title, Text } = Typography
    const { Search } = Input
    console.log(this.props)
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
            <Row style={{ width: '80%', marginTop: 20 }} justify="space-around">
              <Title>Welcome!</Title>
            </Row>
            <Row style={{ width: '40%', marginTop: 20, marginBottom: 30 }} justify="space-around">
              <Search
                placeholder="Search Member"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={this.onSearch}
              />
            </Row>
            <Row style={{ width: '80%' }}>
              {
                allData.map(item => {
                  const groupName = item.group
                  return (
                    <Row style={{ width: '100%', marginTop: 20 }}>
                      <Col span={4}>
                        <Row>
                          <Col>
                            <Avatar src={item.detail.logo} alt={item.name} size="large" />
                          </Col>
                          <Col style={{ marginLeft: 5 }}>
                            <Row>
                              <Text className="group-name" strong>
                                { item.name }
                              </Text>
                            </Row>
                            <Row>
                              <Text className="group-location">
                                { item.detail.location }
                              </Text>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col span={20} style={{ width: '80%' }}>
                        <Row>
                          <List
                            dataSource={item.member}
                            style={{ width: '100%', maxHeight: '500px', overflow: 'auto' }}
                            renderItem={item => (
                              <>
                                <List.Item>
                                  <List.Item.Meta
                                    avatar={<Avatar size="large" src={item.pict} alt={item.name.romaji} />}
                                    title={<a href="https://ant.design">{item.name.romaji}</a>}
                                    description={item.career_info.group}
                                  />
                                  <Button className={`btn-${findColorClass(groupName)}`} onClick={() => this.modalVisibility(item, true)}>Detail</Button>
                                </List.Item>
                                <Divider />
                              </>
                            )}
                          />
                        </Row>
                      </Col>
                    </Row>
                  )
                })
              }
            </Row>
            { this.renderModalDetail() }
          </Row>
        </Animate>
      )
    }
  }
}

export default Landing