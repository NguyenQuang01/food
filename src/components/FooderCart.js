import React, { useContext } from "react";
import { Button } from "react-bootstrap";

const FooderCart = (tong) => {

  // let navigate = useNavigate();
  

  return (
    <div className="fooderCart">
      <div className="successful" id="1">
        <img
          src="https://caudovui.net/wp-content/uploads/2017/02/smile-cartoon-graphic.gif"
          alt=""
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
