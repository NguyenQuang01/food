import React, { useContext, useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Context from "../Context/UserContext";
import { Tab, Tabs } from "react-bootstrap";
import axios from "axios";
const Login = () => {
  const { tkmk, settkmk } = useContext(Context);
  let navigate = useNavigate();
  const [user, setuser] = useState();
  // const { user, setuser } = useContext(UserContext);
  // console.log(user);
  const key = "updatable";
  const onFinish = (values) => {
    // console.log("Success:", values);
    // console.log(
    user.map((item) => {
      if (item.name === values.username) {
        if (item.pass === values.password) {
          settkmk(item.name);
          message.loading({
            content: "Loading...",
            key,
          });
          setTimeout(() => {
            navigate("/home");
          }, 3000);
        } else {
          message.error("Sai mật khẩu");
        }
      } else {
        // message.error("sai tài khoản");
      }
    });
    console.log(tkmk);

    // );
    // if (user.includes(values.username)) {
    // }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    axios
      .get("https://62cfbda11cc14f8c087c4451.mockapi.io/api/users")
      .then(function (response) {
        setuser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(user);
  function register(values) {
    if (values.passwordRegister === values.passwordvsRegister) {
      console.log("thanh cong");
    } else {
      message.error("nhập lại mật khẩu không đúng");
    }
  }
  const [form] = Form.useForm();
  const onFill = () => {
    form.setFieldsValue({
      username: "trungquang",
      password: "1",
    });
  };
  return (
    <div className="full-container">
      <div className="avatarLogin">
        <img
          src="https://images.pexels.com/photos/952356/pexels-photo-952356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="notificationt" id="notificationt">
        Sai thông tin tài khoản
      </div>

      <div className="formTab">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="login" title="Login">
            <Form
              className="formLoign"
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              form={form}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  {/* <Link className="nav-link" to="/home"> */}
                  Submit
                  {/* </Link> */}
                </Button>
                <Button type="link" htmlType="button" onClick={onFill}>
                  Fill form
                </Button>
              </Form.Item>
            </Form>
          </Tab>
          <Tab eventKey="register" title="Register">
            <Form
              className="formLoign"
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={register}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="usernameRegister"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="passwordRegister"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                label="Passwordvs"
                name="passwordvsRegister"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  {/* <Link className="nav-link" to="/home"> */}
                  Submit
                  {/* </Link> */}
                </Button>
              </Form.Item>
            </Form>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
