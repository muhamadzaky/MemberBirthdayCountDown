import { Col, message, Row, Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import history from './history';

const { Text } = Typography;

export const uriByENV = (env) => {
  switch (env) {
    case 0:
      return '/'
    case 1:
      return '/MemberBirthdayCountDown/'
    default:
      return '/'
  }
}

export const findColorClass = (key) => {
  switch (key) {
    case "AKB48":
      return "pink"
    case "Nogizaka46":
      return "purple"
    default:
      return ""
  }
}

export const reloadAPIError = () => {
  message.error('Failed to get data', 2.5).then(() => message.loading('Page will be reloaded in 5 secs', 5)).then(() => { message.destroy(); window.location.reload() });
}

export const Loading = () => {
  return (
    <Row justify="space-around" align="middle" style={{ width: '100%' }}>
      <Col>
        <Row justify="space-around">
          <LoadingOutlined style={{ fontSize: 32 }} />
        </Row>
        <Row justify="space-around" style={{ marginTop: 20 }}>
          <Text>Loading ...</Text>
        </Row>
      </Col>
    </Row>
  )
}

export const TeamTextGenerator = (key) => {
  switch (key.slice(-2)) {
    case '48':
      return 'Team'
    case '46':
      return 'Gen' 
    default:
      return 'Team'
  }
}