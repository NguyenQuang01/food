import React, { useState, useContext } from "react";
import Header from "../components/Header";
import { Divider, Radio, Table } from "antd";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FooderCart from "../components/FooderCart";
import Information from "../components/Information";
// src/pages/Cart.js
import { useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
  removeAll,
} from "../store/slice";
import { useDispatch } from "react-redux";
// import Item from "antd/lib/list/Item";
const Cart = () => {
  const dispatch = useDispatch();

  // src/pages/Cart.js
  const cart = useSelector((state) => state.cart.cart);
  let navigate = useNavigate();

  function handleSucc() {
    dispatch(removeAll());
    let a = document.getElementById("1");
    console.log((a.style.display = "flex"));
    function methodName() {
      navigate("/home");
    }
    setTimeout(methodName, 3000);
  }
  const data = [
    cart?.map((item, index) => ({
      tt: index,
      key: item.id,
      name: item.name,
      price: item.price * item.quantity,
      quantity: item.quantity,
      action: "x",
      imge: item.img,
    })),
  ];
  const [selectionType, setSelectionType] = useState("checkbox");
  // const [slInput, setslInput] = useState(data[0]);
  const [sumListCart, setsumListCart] = useState([]);
  const [succ, setsucc] = useState();
  const onFinish = (values) => {
    console.log(values);
    handleSucc();
  };

  const columns = [
    {
      title: "Ảnh",
      // key: "imge",
      dataIndex: "imge",
      render: (imge) => <img src={imge} alt={imge} className="imgeCart" />,
    },
    {
      title: "Tên món ăn",
      dataIndex: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "giá",
      dataIndex: "price",
      render: (price, record) => <p>{price}</p>,
    },
    {
      title: "Số lượng",
      dataIndex: "key",
      // render: (imge) => <img src={imge} alt={imge} className="imgeCart" />,
      render: (key, record) => (
        <div className="handleInput">
          <Button
            variant="outline-secondary"
            onClick={() => dispatch(decrementQuantity(record.key))}
          >
            -
          </Button>
          <input
            className="inputSl"
            value={data[0].find((item) => item.key === record.key).quantity}
            id="inputPlus"
          />
          <Button
            variant="outline-success"
            onClick={() => {
              dispatch(incrementQuantity(record.key));
            }}
          >
            +
          </Button>
        </div>
      ),
    },
    {
      title: "xóa",
      dataIndex: "key",
      render: (key, record) => (
        <Button
          variant="outline-secondary"
          onClick={() => dispatch(removeItem(record.key))}
        >
          xóa
        </Button>
      ),
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      // console.log(
      //   `selectedRowKeys: ${selectedRowKeys}`,
      //   "selectedRows: ",
      //   selectedRows
      // );
      setsumListCart(selectedRows);
    },
    // getCheckboxProps: (record) => ({
    //   disabled: record.name === "Disabled User",
    //   // Column configuration not to be checked
    //   name: record.name,
    // }),
  };
  console.log(sumListCart);
  const arrsum = [];
  let tong = 0;
  // body
  for (let i = 0; i < sumListCart.length; i++) {
    arrsum.push(sumListCart[i].price);
  }
  let a = arrsum.map((item, index) => (tong += item));
  // console.log(a);

  return (
    <div>
      <Header />
      <div className="contentCart container">
        <Radio.Group
          onChange={({ target: { value } }) => {
            setSelectionType(value);
          }}
          value={selectionType}
        >
          <Radio value="checkbox" id="check">
            Checkbox
          </Radio>
          <Radio value="radio">radio</Radio>
        </Radio.Group>

        <Divider />

        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data[0]}
        />
      </div>
      <FooderCart
        tong={tong}
        setsucc={setsucc}
        succ={setsucc}
        onFinish={onFinish}
        handleSucc={handleSucc}
      />
      <Information onFinish={onFinish} />
    </div>
  );
};

export default Cart;
