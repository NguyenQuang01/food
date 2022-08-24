import React, { useContext } from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";
import Context from "../Context/UserContext";
import { addToCart } from "../store/slice";
import { useDispatch } from "react-redux";
const DetailProduct = () => {
  const dispatch = useDispatch();
  const { dataProduct, listCart, setcartData } = useContext(Context);
  const params = useParams();
  function close(id, img, name, price) {
    setcartData((pre) => [...pre, { id, img, name, price }]);
    // listCart;
    // document.getElementById("close").style.display = "block";
    // myFunction();
    // function myFunction() {
    //   setTimeout(alertFunc, 3000);
    // }
    // function alertFunc() {
    //   document.getElementById("close").style.display = "none";
    // }
    // setcartData(listCart);
  }
  // console.log(params);
  // console.log(dataProduct);
  return (
    <div className="container ">
      {dataProduct &&
        dataProduct
          .filter((item) => item.id === params.id)
          .map((item) => (
            <CardGroup>
              <Card className="detailProduct">
                <div className="imgDetail">
                  <Card.Img
                    className="detailImge"
                    variant="top"
                    src={item.img}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="reputation">Uy tín</Card.Title>
                  <Card.Title className="nameDetailProduct">
                    {" "}
                    {item.name}
                  </Card.Title>
                  <Card.Text className="detailStar">
                    <FaStar color=" #F4B30C" /> {item.start}
                  </Card.Text>
                  <Card.Text className="detailDesTilte">Description:</Card.Text>
                  <Card.Text className="detailDes">
                    <span></span>
                    {item.des}
                  </Card.Text>
                  <Card.Text className="detailPrice">30.000 đ</Card.Text>
                  <Card.Text className="detailAdd">
                    Địa chỉ : {item.add}
                  </Card.Text>
                  <NavLink to="/cart" className="nav-link">
                    <Button
                      variant="secondary"
                      as="input"
                      type="button"
                      value="Thêm vào giỏ hàng"
                      className="detailBtn"
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: item.id,
                            img: item.img,
                            name: item.name,
                            price: item.price,
                          })
                        )
                      }
                    />{" "}
                  </NavLink>
                </Card.Body>
              </Card>
            </CardGroup>
          ))}
    </div>
  );
};

export default DetailProduct;
