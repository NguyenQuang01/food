import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Tag, Spin } from "antd";
import {
  Container,
  Row,
  Col,
  Nav,
  CardGroup,
  Card,
  Button,
} from "react-bootstrap";
import { FaStar } from "react-icons/fa";
// src/components/Item.js
import { addToCart } from "../store/slice";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../store/slice";
const Content = () => {
  const [limit, setlimit] = useState(10);
  const [list, setlist] = useState(0);

  const dispatch = useDispatch();
  const { entities, loading } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  console.log(entities && entities);
  const loadMode = () => {
    setlimit((pre) => pre + 5);
  };
  const handleList = (data) => {
    console.log(data);
    setlist((pre) => (pre = 0));
    setlimit((pre) => (pre = 10));
  };
  const handleList1 = (data) => {
    console.log(data);
    setlist((pre) => (pre = 1));
    setlimit((pre) => (pre = 5));
  };
  const handleList2 = () => {
    setlist((pre) => (pre = 2));
    setlimit((pre) => (pre = 5));
  };
  const handleList3 = () => {
    setlist((pre) => (pre = 3));
    setlimit((pre) => (pre = 5));
  };
  const handleList4 = () => {
    setlist((pre) => (pre = 4));
    setlimit((pre) => (pre = 5));
  };
  const handleList5 = () => {
    setlist((pre) => (pre = 5));
    setlimit((pre) => (pre = 5));
  };
  const handleList6 = () => {
    setlist((pre) => (pre = 6));
    setlimit((pre) => (pre = 5));
  };

  return (
    <div className="content">
      <Container>
        <Row>
          <Col xs={2}>
            <Nav variant="pills" defaultActiveKey="link-0" className="listMenu">
              <Nav.Item>
                <Nav.Link eventKey="link-0" onClick={handleList}>
                  Tất Cả Sản Phẩm
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1" onClick={handleList1}>
                  Món ăn Âu
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2" onClick={handleList2}>
                  Món ăn Á
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-6" onClick={handleList3}>
                  Món ăn Thái
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-5" onClick={handleList4}>
                  Món ăn Nhật Bản
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-4" onClick={handleList5}>
                  Món ăn Trung Quốc
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3" onClick={handleList6}>
                  Món ăn Địa Trung Hải
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col>
            <Row>
              {loading ? (
                <div className="example">
                  <Spin size="large" />
                </div>
              ) : (
                <CardGroup>
                  {entities &&
                    entities
                      .filter((i) =>
                        list === 0 ? i.list > list : i.list === list
                      )
                      .slice(0, limit)

                      .map((item) => (
                        <Col xs={3} key={item.id}>
                          {" "}
                          <Card>
                            <Card.Img variant="top" src={item.img} />
                            <Card.Body>
                              <Card.Title>{item.name.toString()}</Card.Title>
                              <Card.Text>
                                5 <FaStar color="#ffd839" />
                              </Card.Text>
                              <Card.Text>
                                <p className="priceProduct">{item.price} đ</p>
                              </Card.Text>
                              <Card.Text className="desProduct">
                                {item.des}
                              </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                              <Button
                                variant="secondary"
                                // onClick={() =>
                                //   close(item.id, item.img, item.name, item.price)
                                // }
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
                              >
                                add cart
                              </Button>{" "}
                              <Link to={item.id}>
                                <Button variant="success">Mua</Button>{" "}
                              </Link>
                            </Card.Footer>
                          </Card>
                        </Col>
                      ))}
                  {/* <Col xs={3}>
                  {" "}
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        5 <FaStar color="#ffd839" />
                      </Card.Text>
                      <Card.Text>
                        <p className="priceProduct">30.000 đ</p>
                      </Card.Text>
                      <Card.Text className="desProduct">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button variant="secondary">add cart</Button>{" "}
                      <Button variant="success">Mua</Button>{" "}
                    </Card.Footer>
                  </Card>
                </Col>

                <Col xs={3}>
                  {" "}
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        5 <FaStar color="#ffd839" />
                      </Card.Text>
                      <Card.Text>
                        <p className="priceProduct">30.000 đ</p>
                      </Card.Text>
                      <Card.Text className="desProduct">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button variant="secondary">add cart</Button>{" "}
                      <Button variant="success">Mua</Button>{" "}
                    </Card.Footer>
                  </Card>
                </Col>
                <Col xs={3}>
                  {" "}
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        5 <FaStar color="#ffd839" />
                      </Card.Text>
                      <Card.Text>
                        <p className="priceProduct">30.000 đ</p>
                      </Card.Text>
                      <Card.Text className="desProduct">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button variant="secondary">add cart</Button>{" "}
                      <Button variant="success">Mua</Button>{" "}
                    </Card.Footer>
                  </Card>
                </Col>
                <Col xs={3}>
                  {" "}
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        5 <FaStar color="#ffd839" />
                      </Card.Text>
                      <Card.Text>
                        <p className="priceProduct">30.000 đ</p>
                      </Card.Text>
                      <Card.Text className="desProduct">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button variant="secondary">add cart</Button>{" "}
                      <Button variant="success">Mua</Button>{" "}
                    </Card.Footer>
                  </Card>
                </Col>
                <Col xs={3}>
                  {" "}
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        5 <FaStar color="#ffd839" />
                      </Card.Text>
                      <Card.Text>
                        <p className="priceProduct">30.000 đ</p>
                      </Card.Text>
                      <Card.Text className="desProduct">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button variant="secondary">add cart</Button>{" "}
                      <Button variant="success">Mua</Button>{" "}
                    </Card.Footer>
                  </Card>
                </Col>
                <Col xs={3}>
                  {" "}
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        5 <FaStar color="#ffd839" />
                      </Card.Text>
                      <Card.Text>
                        <p className="priceProduct">30.000 đ</p>
                      </Card.Text>
                      <Card.Text className="desProduct">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button variant="secondary">add cart</Button>{" "}
                      <Button variant="success">Mua</Button>{" "}
                    </Card.Footer>
                  </Card>
                </Col> */}
                </CardGroup>
              )}
            </Row>{" "}
            <div className="loadMode">
              {" "}
              <Button variant="dark" onClick={loadMode}>
                Load Mode
              </Button>{" "}
            </div>
          </Col>
        </Row>
      </Container>
      <div className="notification" id="close">
        <Tag color="green" className="textNotification">
          thêm giỏ hàng thành công
        </Tag>
        <span className="close">x</span>
      </div>
    </div>
  );
};

export default Content;
