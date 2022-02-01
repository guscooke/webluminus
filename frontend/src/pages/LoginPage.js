import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Row,
  Col,
  Table,
  Button,
  Popover,
  Card,
  notification,
  Space,
  Form,
  Input,
  Tooltip,
  Checkbox,  
} from "antd";
import { QuestionCircleOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { setAuthJWT } from '../actions/user.actions.js';
//#import { history } from '../helpers/history';
import { withRouter } from "react-router";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 4,
    },
  },
};

const LoginForm = (props) => {
  const onFinish = values => {	
	let { email, password } = values;	
	fetch(
		process.env.test_api + "login",
		{
			method: "POST",
			headers:{
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ email, password })
		}
	)
		.then((user) => user.json())
		.then((user) => {
			props.setAuthJWT({ auth_jwt: user.message[0].JWT, username: user.message[0].NOME, email: user.message[0].EMAIL, afiliado_id: user.message[0].AFILIADO });			
			props.history.push("/");
		});
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Por favor informe seu e-mail!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-mail" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Por favor informe sua senha!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Senha"
        />
      </Form.Item>
      <Form.Item>
        <a className="login-form-forgot" href="">
          Esqueceu a senha?
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>        
      </Form.Item>
    </Form>
  );
};

const LoginPage = (props) => { 

  useEffect(() => {
    sessionStorage.removeItem("auth_jwt");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("afiliado_id");
  }, []);

  const [key, setKey] = useState('login');  

  const tabList = [    
    {
      key: 'login',
      tab: 'Login',
    },    
  ]; 

  const contentList = {
    login: <LoginForm { ...props } />,    
    reset: <p>form reset</p>,
  };

  return (    
    <Row type="flex" justify="center" align="middle" style={{minHeight: '100vh'}}>
      <Col span={10}>
        <Card 
          title="Admin Luminus" 
          tabList={tabList}
          activeTabKey={key}
          onTabChange={key => {
            setKey(key);
          }}
        >
          {contentList[key]}
        </Card>
      </Col>
    </Row>    
  );
};

const mapStateToProps = (state) => {
  return {
    auth_jwt: state.userReducer,	
  };
};

const mapDispatchToProps = {
    setAuthJWT: setAuthJWT    
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage));
