import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { useLocation, useNavigate } from "react-router-dom";
import apiRequest from "../datafetch/apiRequest";
import { useState, useEffect, useContext } from "react";
import { BreadcrumbSelector } from "../layouts/MenuLayout";

import test from "../assets/img/item-highlight.png";
import rating from "../assets/img/ratings/rating-35.png";

const Item = () => {
  const { setSuccessMsg, setVariant, setShowtoast, cart, setTotal } =
    useContext(BreadcrumbSelector);
  const [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname.split("/").filter((loc) => loc !== "");

  const fetchItem = async (objReq) => {
    const response = await apiRequest(
      `http://localhost:5000/${path[0]}/${path[1]}/${path[2]}/${path[3]}`,
      objReq
    );
    const categoryArr = await response.json();
    localStorage.setItem("cart-item", JSON.stringify(categoryArr));
    setItem(categoryArr);
  };

  useEffect(() => {
    const objReq = {
      method: "GET",
    };
    fetchItem(objReq);
  }, []);

  const computeTotal = () => {
    let runningTotal = 0;
    cart.forEach((item) => {
      runningTotal = runningTotal + Number(item.price) * Number(item.quantity);
    });
    setTotal(runningTotal);
  };

  const handleAddToCart = async (event) => {
    event.preventDefault();
    computeTotal();
    const status = localStorage.getItem("isLogged");
    const isLogged = status === "true" && true;
    if (isLogged) {
      const token = localStorage.getItem("accessToken");
      const user = JSON.parse(localStorage.getItem("user"));
      const cartItem = JSON.parse(localStorage.getItem("cart-item"));
      const objReq = {
        method: "POST",
        headers: {
          authorization: `token ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `itemName=${cartItem.name}&itemPrice=${cartItem.price}&itemQuantity=${quantity}`,
      };
      const result = await apiRequest(
        `http://localhost:5000/${user.username}/add-to-cart`,
        objReq
      );
      const resultObj = await result.json();
      if (resultObj.Code === "200") {
        setVariant("success");
        setSuccessMsg(resultObj.Msg);
      } else {
        setVariant("danger");
        setSuccessMsg(resultObj.Msg);
      }
      setShowtoast(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="item mt-5">
      <h2 className="menu-header">{item.name}</h2>
      <hr />
      <Container fluid="lg">
        <Row className="mt-5">
          <Col md={6} xs={12} className=" text-center">
            <Figure>
              <Figure.Image
                width={250}
                height={250}
                //   alt="171x180"
                src={test}
                roundedCircle
                fluid
              />
              <Figure.Caption>{item.description}</Figure.Caption>
            </Figure>
          </Col>
          <Col md={6} xs={12}>
            <div className=" mb-4">
              <span className=" d-inline-block">Rating: &nbsp;</span>
              <span className=" d-inline-block">
                <Image height={20} src={rating} />
              </span>
              <span className=" d-inline-block">{`(${item.rating})`}</span>
            </div>
            <div className=" my-4">
              <span className=" d-inline-block">Price: &nbsp;</span>
              <span className=" d-inline-block">&#8369;{item.price}</span>
            </div>
            <Form onSubmit={handleAddToCart}>
              <div className=" my-4">
                <span className=" d-inline-block">
                  <Form.Label>Quantity:</Form.Label>
                </span>
                <span className="ms-2 d-inline-block">
                  <Form.Control
                    className="quantity"
                    type="number"
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.value)}
                  />
                </span>
              </div>
              <div className="d-grid mx-0 my-4 p-0">
                <Button type="submit" className="add-button m-2">
                  Add to Cart
                </Button>
                <Button className="order-button m-2">Order Now</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <hr />
    </div>
  );
};

export default Item;
