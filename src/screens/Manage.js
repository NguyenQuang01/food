import React, { useContext, useState } from "react";
import { Button, Space, Table, Tag, Form, Input, Select } from "antd";
import Context from "../Context/UserContext";
import Header from "../components/Header";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

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
const Manage = () => {
  const { dataProduct } = useContext(Context);
  const columns = [
    {
      title: "TT",
      // key: "imge",
      dataIndex: "tt",
      sorter: (a, b) => a.tt - b.tt,
      // render: (img) => <img src={img} alt="" className="imgeCart" />,
    },
    {
      title: "Ảnh",
      // key: "imge",
      dataIndex: "img",
      render: (img) => <img src={img} alt="" className="imgeCart" />,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "loại",
      dataIndex: "loai",
      key: "loai",
    },
    {
      title: "giá",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "mô tả",
      dataIndex: "mota",
      key: "mota",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button>Delete</Button>
        </Space>
      ),
    },
  ];
  const data = [
    dataProduct &&
      dataProduct.map((item, index) => ({
        tt: index,
        key: item.id,
        img: item.img,
        name: item.name,
        age: item.price,
        address: item.add,
        mota: item.des,
        loai: item.list,
      })),
  ];
  const [datas, setdatas] = useState(data[0]);
  console.log(data[0]);
  const onFinish = (values) => {
    console.log(values.user);
    // handleSucc();
  };
  return (
    <>
      <Header />
      <div className="details container">
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
            name={["user", "link"]}
            label="link ảnh"
            rules={[
              {
                type: "url",
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          {/* <Form.Item name={["user", "Thành Phố"]} label="Thành Phố">
            <Select>
              <Select.Option value="Hà Nội">Hà Nội</Select.Option>
              <Select.Option value="Nam Đinh">Nam Đinh</Select.Option>
              <Select.Option value="Hải Phòng">Hải Phòng</Select.Option>
              <Select.Option value="Thanh hóa">Thanh hóa</Select.Option>
            </Select>
          </Form.Item> */}
          <Form.Item name={["user", "Địa Chỉ"]} label="Địa Chỉ">
            <Input />
          </Form.Item>
          <Form.Item name={["user", "Loại"]} label="Loại">
            <Input />
          </Form.Item>
          <Form.Item name={["user", "giá"]} label="Giá">
            <Input />
          </Form.Item>
          <Form.Item name={["user", "des"]} label="des">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Thanh Toán
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="container manage">
        <Table columns={columns} dataSource={datas} />
      </div>
    </>
  );
};

export default Manage;
