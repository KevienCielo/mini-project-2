import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useContext, useEffect, useState } from "react";
import { BreadcrumbSelector } from "../layouts/MenuLayout";
import test from "../assets/img/item.png";
import { Link, useLocation } from "react-router-dom";
import apiRequest from "../datafetch/apiRequest";

const Category = () => {
  const [category, setCategory] = useState([]);
  const location = useLocation();
  const path = location.pathname.split("/").filter((loc) => loc !== "");
  const { selector } = useContext(BreadcrumbSelector);

  const fetchCategory = async (objReq) => {
    const response = await apiRequest(
      `http://localhost:5000/${path[0]}/${path[1]}/${path[2]}`,
      objReq
    );
    const categoryArr = await response.json();
    setCategory(categoryArr);
  };

  useEffect(() => {
    localStorage.removeItem("cart-item");

    const objReq = {
      method: "GET",
    };
    fetchCategory(objReq);
  }, []);

  return (
    <div className="category mt-5">
      <Breadcrumb>
        <Breadcrumb.Item className="breadcrumb-item" href="/menu">
          {path[0]}
        </Breadcrumb.Item>
        <Breadcrumb.Item className="breadcrumb-item" href="/menu">
          {path[1]}
        </Breadcrumb.Item>
        <Breadcrumb.Item href={`/${path[0]}/${path[1]}/${path[2]}`} active>
          {path[2]}
        </Breadcrumb.Item>
      </Breadcrumb>
      <h2 className="menu-header">{selector[1]}</h2>
      <hr />
      <Container fluid="lg">
        <Row>
          {category.length ? (
            category.map((item) => (
              <Col
                md={3}
                sm={4}
                xs={12}
                className="text-center my-3"
                key={item.id}
              >
                <Link
                  to={`/${path[0]}/${path[1]}/${path[2]}/${item.id}`}
                  className="category-link"
                >
                  <Image src={test} roundedCircle fluid />
                  <p className="h5 mt-3">{item.name}</p>
                </Link>
              </Col>
            ))
          ) : (
            <p className="h6 text-center">Cannot retrieve data from server.</p>
          )}
          {/* <Col md={3} sm={4} xs={12} className="text-center my-3">
            <Link className="category-link">
              <Image src={test} roundedCircle fluid />
              <p className="h5">Item no. 1</p>
            </Link>
          </Col>
          <Col md={3} sm={4} xs={12} className="text-center my-3">
            <Link className="category-link">
              <Image src={test} roundedCircle fluid />
              <p className="h5">Item no. 1</p>
            </Link>
          </Col>
          <Col md={3} sm={4} xs={12} className="text-center my-3">
            <Link className="category-link">
              <Image src={test} roundedCircle fluid />
              <p className="h5">Item no. 1</p>
            </Link>
          </Col>
          <Col md={3} sm={4} xs={12} className="text-center my-3">
            <Link className="category-link">
              <Image src={test} roundedCircle fluid />
              <p className="h5">Item no. 1</p>
            </Link>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};
export default Category;
