import React, { useState, useContext, useEffect } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { Button, Navbar, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Context from "../Context/UserContext";
const Header = () => {
  const [inputSeach, setinputSeach] = useState("");
  const {
    cartData,
    listCart,
    tkmk,
    setcartData,
    dataProduct,
    setdataProduct,
    start,
  } = useContext(Context);
  const navigate = useNavigate();
  // function seach(e) {
  //   setinputSeach(e.target.value);
  // }
  // const [foundUsers, setFoundUsers] = useState(USERS);

  const seach = (e) => {
    const keyword = e.target.value;
    // console.log(dataProduct);
    if (keyword !== "") {
      // console.log("a");

      const results = dataProduct.filter((user) => {
        return user.name.toLowerCase().includes(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setdataProduct(results);
    } else {
      setdataProduct(start);
      // If the text field is empty, show all users
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
                  src="https://scontent-hkt1-1.xx.fbcdn.net/v/t39.30808-6/267775264_1378653919253655_7315343909142684339_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=Lb-0ciUdR_oAX_ZiK33&_nc_ht=scontent-hkt1-1.xx&oh=00_AT8u-LCZP_sOgBKtNYcRUj-I_GQvmFt26Y_IWyW4LxMtDQ&oe=62F9F885"
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
                <div className="slCart">{cartData && cartData.length}</div>
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
