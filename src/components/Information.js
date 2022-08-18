import React from "react";
import { Button, Form, Input, Select } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const Information = ({ onFinish}) => {
  return (
    <div className="Inf container">
      {" "}
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              type: "email",
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={["user", "Thành Phố"]} label="Thành Phố">
          <Select>
            <Select.Option value="Hà Nội">Hà Nội</Select.Option>
            <Select.Option value="Nam Đinh">Nam Đinh</Select.Option>
            <Select.Option value="Hải Phòng">Hải Phòng</Select.Option>
            <Select.Option value="Thanh hóa">Thanh hóa</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name={["user", "Địa Chỉ"]} label="Địa Chỉ">
          <Input />
        </Form.Item>
        <Form.Item name={["user", "introduction"]} label="Introduction">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Thanh Toán
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Information;
