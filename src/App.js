import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.css';
// import Background from './jaspi.png';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

class App extends React.Component {
  state = {
    loading: false,
    iconLoading: false,
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
    setTimeout(() => {
      this.setState({ iconLoading: false });
      this.props.history.push('/main/search');
    }, 1000);
  };

  render() {
    const onFinish = (values) => {
      console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    var sectionStyle = {
      // width: '100%',
      // height: '400px',
      // backgroundImage: `url(${Background})`,
      minHeight: '50vh',
      // backgroundSize: 'auto',
      // backgroundRepeat: 'no-repeat',
    };
    return (
      <Row type="flex" justify="center" align="middle" style={sectionStyle}>
        <Col span={6} style={{}}>
          <Form {...layout} name="basic" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password prefix={<LockOutlined />} />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default App;
