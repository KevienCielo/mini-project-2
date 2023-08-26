import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { BreadcrumbSelector } from "../layouts/MenuLayout";
import apiRequest from "../datafetch/apiRequest";
import test from "../assets/img/feature-1.png";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const navigate = useNavigate();
  const { setSelector } = useContext(BreadcrumbSelector);

  const handleClick = (selectedKey) => {
    switch (selectedKey) {
      case "korean-mains":
        setSelector([`/food/${selectedKey}`, "Korean Mains"]);
        navigate(`/menu/food/${selectedKey}`);
        break;
      case "cubs-favorites":
        setSelector([`/food/${selectedKey}`, "Cubs Favorites"]);
        navigate(`/menu/food/${selectedKey}`);
        break;
      case "desserts":
        setSelector([`/food/${selectedKey}`, "Desserts"]);
        navigate(`/menu/food/${selectedKey}`);
        break;
      case "premium-blends":
        setSelector([`/drinks/${selectedKey}`, "Premium Blends"]);
        navigate(`/menu/drinks/${selectedKey}`);
        break;
      case "classic-milkteas":
        setSelector([`/drinks/${selectedKey}`, "Classic Milkteas"]);
        navigate(`/menu/drinks/${selectedKey}`);
        break;
      case "fruit-quenchers":
        setSelector([`/drinks/${selectedKey}`, "Fruit Quenchers"]);
        navigate(`/menu/drinks/${selectedKey}`);
        break;
      case "melona-smoothies":
        setSelector([`/drinks/${selectedKey}`, "Melona Smoothies"]);
        navigate(`/menu/drinks/${selectedKey}`);
        break;
      case "espresso-coffees":
        setSelector([`/drinks/${selectedKey}`, "Espresso Coffees"]);
        navigate(`/menu/drinks/${selectedKey}`);
        break;

      default:
        break;
    }
  };

  const fetchMenu = async (objReq) => {
    const response = await apiRequest("http://localhost:5000/menu", objReq);
    const menuArr = await response.json();
    setMenu(menuArr);
  };

  useEffect(() => {
    const objReq = {
      method: "GET",
    };
    fetchMenu(objReq);
  }, []);

  return (
    <div className="menu">
      <Container className="m-0 p-0" fluid="lg">
        <Row className=" m-0 p-0">
          <h2 className="menu-header fw-bold mt-3 mb-4">Menu</h2>
        </Row>

        {menu.length ? (
          menu.map((category, index) => (
            <div key={category.id}>
              <Row className=" m-0 p-0">
                <h3 className="menu-header fw-bold">{category.name}</h3>
              </Row>
              <hr />
              <Row className=" mb-3">
                {category.categories.map((cat) => (
                  <Col md={6} xs={12} className="my-2" key={cat.id}>
                    <Link
                      onClick={() => handleClick(`${cat.path}`)}
                      to={`/menu/${menu[index].name.toLowerCase()}/${cat.path}`}
                      className="category-link"
                    >
                      <Image src={test} roundedCircle className="img-fluid" />
                      <span className=" ms-3">{cat.name}</span>
                    </Link>
                  </Col>
                ))}
              </Row>
            </div>
          ))
        ) : (
          <>
            <hr />
            <Row>
              <Col xs={12}>
                <p className="h6 text-center">
                  Cannot retrieve data from server.
                </p>
              </Col>
            </Row>
          </>
        )}

        {/* <Row className=" m-0 p-0">
          <h3 className="menu-header fw-bold">Food</h3>
        </Row>
        <hr />
        <Row className=" mb-5">
          <Col md={6} xs={12} className="my-2">
            <Link
              onClick={() => handleClick("korean-mains")}
              to="/menu/food/korean-mains"
              className="category-link"
            >
              <Image src={test} roundedCircle className="img-fluid" />
              <span className=" ms-3">Korean Mains</span>
            </Link>
          </Col>
          <Col md={6} xs={12} className="my-2">
            <Link
              onClick={() => handleClick("cubs-favorites")}
              to="/menu/food/cubs-favorites"
              className="category-link"
            >
              <Image src={test} roundedCircle className="img-fluid" />
              <span className=" ms-3">Cubs Favorites</span>
            </Link>
          </Col>
          <Col md={6} xs={12} className="my-2">
            <Link
              onClick={() => handleClick("desserts")}
              to="/menu/food/desserts"
              className="category-link"
            >
              <Image src={test} roundedCircle className="img-fluid" />
              <span className=" ms-3">Desserts</span>
            </Link>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default Menu;
