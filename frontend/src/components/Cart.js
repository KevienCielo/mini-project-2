import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { CartToggler } from "../layouts/MenuLayout";
import CartItem from "./CartItem";

const Cart = () => {
  const { show, handleClose, total } = useContext(CartToggler);

  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        backdrop="static"
        placement="end"
      >
        <div className="cart-canvas">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="cart-title mt-3">Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <hr />
          <Offcanvas.Body className="cart-body min-vh-100">
            <CartItem />
            <div className="cart-footer mt-4">
              <div className="d-flex justify-content-between">
                <h5>Total</h5>
                <h5>&#8369;{total}</h5>
              </div>
              <div className="d-grid">
                <Button className="brown-button">Checkout</Button>
              </div>
            </div>
          </Offcanvas.Body>
        </div>
      </Offcanvas>
    </>
  );
};

export default Cart;
