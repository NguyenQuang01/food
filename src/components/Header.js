import React, { useState, useContext } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { Button, Navbar, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Context from "../Context/UserContext";
// src/pages/Cart.js
import { useSelector } from "react-redux";
const Header = () => {
  // src/pages/Cart.js
  const cart = useSelector((state) => state.cart);
  const [inputSeach, setinputSeach] = useState("");
  const { cartData, tkmk, dataProduct, setdataProduct, start } =
    useContext(Context);
  const navigate = useNavigate();
  

  const seach = (e) => {
    const keyword = e.target.value;
    if (keyword !== "") {

      const results = dataProduct.filter((user) => {
        return user.name.toLowerCase().includes(keyword.toLowerCase());
      });
      setdataProduct(results);
    } else {
      setdataProduct(start);
    }

    setinputSeach(keyword);
  };
  return (
    // <search.Provider>
    <div className="header">
      <Navbar bg="light" expand="lg">
        <div className="container">
          <Container fluid>
            <Navbar.Brand>
              <Link to="/home" className="nav-link">
                <i className="devicon-codeigniter-plain"></i>Home
              </Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Link to="/manage" className="nav-link">
                <i class="devicon-amazonwebservices-original"></i>Manage
              </Link>
            </Navbar.Brand>
            <Navbar.Collapse id="navbarScroll" className="abc">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={inputSeach}
                  onChange={seach}
                />
                <Button variant="light">
                  <FaSearch color="#777" />
                </Button>
              </Form>
            </Navbar.Collapse>
            <div className="avatarHeader">
              <div className="imgAvatarHeader">
                <img
                  src={require("../imge/292141043_1455154994936880_9136350329601171478_n.jpg")}
                  alt=""
                />
              </div>
              <p>
                <span>
                  Hello,
                  <br />
                </span>{" "}
                {tkmk}
              </p>
              <div className="outAcc" onClick={() => navigate("/")}>
                đăng xuất
              </div>
            </div>
            <Navbar.Brand href="#" className="cartHeader">
              <Link to="/cart" className="nav-link">
                {" "}
                <FaShoppingCart color="#777" size={30} />
                <div className="slCart">{cart && cart.length}</div>
              </Link>
            </Navbar.Brand>
          </Container>
        </div>
      </Navbar>
    </div>
    // </search.Provider>
  );
};

export default Header;
