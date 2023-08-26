import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ToastContainer from "react-bootstrap/ToastContainer";
import Toast from "react-bootstrap/Toast";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { createContext, useState } from "react";
import Cart from "../components/Cart";
import SideNav from "../components/SideNav";
import apiRequest from "../datafetch/apiRequest";
import { MdFastfood } from "react-icons/md";

const MenuLayout = () => {
  const [show, setShow] = useState(false);
  const [selector, setSelector] = useState([]);
  const [showtoast, setShowtoast] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [variant, setVariant] = useState("");
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  const handleClose = () => setShow(false);

  const handleShow = async (event) => {
    setShow(true);
    event.preventDefault();
    const status = localStorage.getItem("isLogged");
    const isLogged = status === "true" && true;
    if (isLogged) {
      const token = localStorage.getItem("accessToken");
      const user = JSON.parse(localStorage.getItem("user"));
      const objReq = {
        method: "GET",
        headers: {
          authorization: `token ${token}`,
        },
      };
      const result = await apiRequest(
        `http://localhost:5000/${user.username}/cart`,
        objReq
      );
      const resultObj = await result.json();
      setCart(resultObj);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="menu">
      <BreadcrumbSelector.Provider
        value={{
          selector,
          cart,
          setSelector,
          setSuccessMsg,
          setVariant,
          setShowtoast,
          setTotal,
        }}
      >
        <Container fluid="lg">
          <Row>
            <Col lg={2} className="d-none d-lg-block">
              <SideNav />
            </Col>
            <Col lg={10}>
              <Outlet />
            </Col>
          </Row>
        </Container>
        <ToastContainer
          position="bottom-end"
          className="p-3 mb-5"
          style={{ zIndex: 1 }}
        >
          <Toast
            onClose={() => setShowtoast(false)}
            show={showtoast}
            delay={3000}
            bg={variant.toLowerCase()}
            autohide
          >
            <Toast.Header>
              <strong className="me-auto">Cart</strong>
            </Toast.Header>
            <Toast.Body>{successMsg}</Toast.Body>
          </Toast>
        </ToastContainer>
      </BreadcrumbSelector.Provider>
      <Link
        onClick={handleShow}
        className="cart-toggle d-flex align-items-center justify-content-end"
      >
        <MdFastfood className="cart-icon" />
      </Link>
      <CartToggler.Provider value={{ show, handleClose, cart, setCart, total }}>
        <Cart />
      </CartToggler.Provider>
    </div>
  );
};

export const BreadcrumbSelector = createContext();
export const CartToggler = createContext();
export default MenuLayout;
