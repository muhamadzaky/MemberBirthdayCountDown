import React, { Component } from 'react';
import { parse } from 'query-string';
import { api } from '../../common/service/api';
import { Avatar, Button, Card, Col, Input, List, Row, Typography } from 'antd';
import { ArrowLeftOutlined, SearchOutlined } from '@ant-design/icons';
import { Loading, reloadAPIError, TeamTextGenerator } from '../../common/general-function';
import { withRouter } from 'react-router-dom';
import Animate from 'rc-animate';
import history from '../../common/history';

class GroupDetail extends Component {
  state = {
    groupID: 0,
    groupName: "",
    dataGroup: {},
    dataListMember: [],
    isLoading: true,
    searchQuery: ""
  }

  componentWillMount() {
    const parsedQuery = parse(this.props.location.search)
    this.setState({ groupID: parsedQuery.id, groupName: parsedQuery.name });
    api.get(`/list/group/${parsedQuery.name === "IZ*ONE" ? "IZONE" : parsedQuery.name}`)
    .then(res => {
      this.setState({ dataGroup: res.data, dataListMember: res.data.member, isLoading: false });
    })
    .catch(err => {
      if (err.message === "Network Error") {
        reloadAPIError();
      } else {
        history.push("/")
      }
      console.log(err.message, err.name);
    })
  }

  onClickUrl = (data) => {
    const { setMemberData } = this.props;
    setMemberData(data, `${this.props.location.pathname}${this.props.location.search}`);
  }

  onChangeSearch = (e) => {
    this.setState({ searchQuery: e.target.value })
  }

  filterDataListMember = () => {
    const { dataListMember, searchQuery } = this.state;
    let param = searchQuery.toString();
    const list = dataListMember ? dataListMember.filter(dt => (dt.name || {}).romaji.toLowerCase().includes(param.toLowerCase())).map(item => {
      item = {
        ...item
      };
      return item;
    }) : [];
    return list;
  }

  renderTeamInfo = (item) => {
    const { Text } = Typography;
    const { dataGroup } = this.state;
    const team = (item.career_info || {}).team;
    const graduated = (item.career_info || {}).graduated.status;
    return (item.career_info || {}).group.map((item, i) => {
      return (
        <Row key={i}>
          <Col>
            <Row>
              <Col gutter={1}><Text>{item} { team[i] ? `${TeamTextGenerator(dataGroup.name)} ${team[i]}` : null }{ graduated ? ` (Graduated)` : "" }</Text></Col>
            </Row>
          </Col>
        </Row>
      )
    })
  }

  render() {
    const { dataGroup, isLoading } = this.state;
    const { isMobile } = this.props;
    const { Title, Text } = Typography;
    return (
      <Animate transitionName="fade" transitionAppear>
        <Row key={1} className="container">
          {
            isLoading ? <Loading /> :
            <Col style={{ width: '100%' }}>
              <Row style={{ marginBottom: 20, marginTop: 20 }}>
                <Button icon={<ArrowLeftOutlined />} type="link" onClick={ () => { history.push("/") } }>Back</Button>
              </Row>
              <Row justify={ isMobile ? "space-around" : "space-between" }>
                <Col>
                  <Row justify="space-around">
                    <Col className="group-detail-logo-bg">
                      <Row>
                        <img src={ (dataGroup.detail || {}).logo } className="group-detail-logo" alt={dataGroup.name} />
                      </Row>
                    </Col>
                    <Col style={ isMobile ? { marginTop: 20, marginLeft: 20 } : { marginLeft: 20 }}>
                      <Row>
                        <a href={(dataGroup.detail || {}).site} target="_blank" rel="noreferrer">
                          <Title>{dataGroup.name} { isMobile ? <br /> : null }<Text className="sub-title">({dataGroup.group})</Text></Title>
                        </a>
                      </Row>
                      <Row>
                        <Text>{(dataGroup.detail || {}).location}</Text>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col style={ isMobile ? { width: '100%', marginTop: 20 } : {}}>
                  <Input 
                    className="custom-input" 
                    prefix={<SearchOutlined style={{ color: '#bfbfbf', fontSize: 14 }} />} 
                    placeholder="Search" 
                    onChange={this.onChangeSearch}
                    enterButton 
                    allowClear
                  />
                </Col>
              </Row>
              <Row style={{ marginTop: 20 }}>
                <List
                  grid={{ gutter: 16, column: isMobile ? 1 : 4 }}
                  dataSource={this.filterDataListMember()}
                  style={{ width: '100%' }}
                  loading={isLoading}
                  renderItem={item => (
                    <List.Item>
                      <Card 
                        style={{ cursor: 'pointer' }}
                        onClick={() => this.onClickUrl(item)}
                      >
                        <Card.Meta
                          avatar={
                            <Avatar size={64} src={item.pict} />
                          }
                          title={(item.name || {}).romaji}
                          description={this.renderTeamInfo(item)}
                        />
                      </Card>
                    </List.Item>
                  )}
                />
              </Row>
            </Col>
          }
        </Row>
      </Animate>
    )
  }
}

export default withRouter(GroupDetail)