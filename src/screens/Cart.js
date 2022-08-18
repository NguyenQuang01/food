import React, { useState, useEffect, useRef, useContext } from "react";
import Header from "../components/Header";
import { Divider, Radio, Table, Tag } from "antd";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FooderCart from "../components/FooderCart";
import Successful from "../components/Successful";
import Information from "../components/Information";
import Context from "../Context/UserContext";

// import Item from "antd/lib/list/Item";
const Cart = () => {
  const { cartData, setcartData } = useContext(Context);
  let navigate = useNavigate();

  function handleSucc() {
    // onFinish();
    cartData.splice(0);
    // setcartData([]);
    let a = document.getElementById("1");
    console.log((a.style.display = "flex"));
    function methodName() {
      navigate("/home");
    }
    setTimeout(methodName, 3000);
  }
  const data = [
    cartData.map((item, index) => ({
      tt: index,
      key: item.id,
      name: item.name,
      price: item.price,
      sl: 1,
      action: "x",
      tags: ["nice", "developer"],
      imge: item.img,
    })),
  ];
  console.log("cart", data);
  // {
  //   key: 0,
  //   name: "John Brown",
  //   price: 32,
  //   sl: 1,
  //   action: "x",
  //   tags: ["nice", "developer"],
  //   imge: "https://images.pexels.com/photos/952356/pexels-photo-952356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // },
  // {
  //   key: 1,
  //   name: "Jim Green",
  //   price: 42,
  //   sl: 1,
  //   tags: ["nice", "developer"],
  //   imge: "https://images.pexels.com/photos/1860204/pexels-photo-1860204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   action: "x",
  // },
  // {
  //   key: 2,
  //   name: "Joe Black",
  //   price: 32,
  //   sl: 1,
  //   tags: ["nice", "developer"],
  //   imge: "https://images.pexels.com/photos/1059943/pexels-photo-1059943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   action: "x",
  // },
  const [selectionType, setSelectionType] = useState("checkbox");
  const [slInput, setslInput] = useState(data[0]);
  const [sumListCart, setsumListCart] = useState([]);
  const [succ, setsucc] = useState();
  const onFinish = (values) => {
    console.log(values);
    handleSucc();
  };
  function delete111(prop) {
    console.log(prop);
    let newDataCart = cartData.filter((item) => item.id !== prop);
    setcartData(newDataCart);
  }
  console.log(cartData);
  function handledMins(prop) {
    let y = slInput.map((item) => {
      // console.log(item.sl + 1);

      return prop === item.key
        ? { ...item, sl: item.sl - 1, price: data[prop].price * (item.sl - 1) }
        : item;
    });
    setslInput(y);
  }

  function handledPlus(prop, tt) {
    // let a = data[0].length;
    console.log(data[0][tt].price);
    // console.log(prop);
    // data[0].map((item) => {
    //   return console.log(prop === item.key);
    // });
    let y = slInput.map((item) => {
      // console.log(prop === item.key);
      return prop === item.key
        ? {
            ...item,
            sl: item.sl + 1,
            price: data[0][tt].price * (item.sl + 1),
          }
        : item;
    });
    setslInput(y);
    // document
    //   .querySelector(".ant-checkbox-input")
    //   .removeAttribute("aria-checked");
    // console.log(document.querySelector(".ant-checkbox-input"));
  }
  // console.log(slInput[0].sl);
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
      render: (price) => <p>{price}</p>,
    },
    {
      title: "Số lượng",
      dataIndex: "key",
      // render: (imge) => <img src={imge} alt={imge} className="imgeCart" />,
      render: (key, record) => (
        <div className="handleInput">
          <Button
            variant="outline-secondary"
            onClick={() => handledMins(key, record.tt)}
          >
            -
          </Button>
          <input className="inputSl" value={record.sl} id="inputPlus" />
          <Button
            variant="outline-success"
            onClick={() => handledPlus(key, record.tt)}
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
        <Button variant="outline-secondary" onClick={() => delete111(key)}>
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
          dataSource={slInput}
        />
      </div>
      <FooderCart
        tong={tong}
        setsucc={setsucc}
        succ={setsucc}
        setcartData={setcartData}
        onFinish={onFinish}
        handleSucc={handleSucc}
      />
      <Information onFinish={onFinish} />
    </div>
  );
};

export default Cart;
