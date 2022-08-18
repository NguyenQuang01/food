import React, { useContext } from "react";
import { Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import Context from "../Context/UserContext";

const FooderCart = (tong) => {
  const { dataProduct, listCart, setcartData } = useContext(Context);

  // let navigate = useNavigate();
  

  return (
    <div className="fooderCart">
      <div className="successful" id="1">
        <img
          src="https://caudovui.net/wp-content/uploads/2017/02/smile-cartoon-graphic.gif"
          alt=""
          srcset=""
        />
      </div>
      <div className="container foodercontent">
        <div className="pay">
          <h5>tổng giá tiền: {tong.tong} đ</h5>
        </div>
        {/* <Button variant="success" onClick={handleSucc}>
          thanh toán{" "}
        </Button> */}
      </div>
    </div>
  );
};

export default FooderCart;
