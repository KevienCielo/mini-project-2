import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import test from "../assets/img/cart.png";
import { useContext } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { CartToggler } from "../layouts/MenuLayout";
import apiRequest from "../datafetch/apiRequest";

const CartItem = () => {
  const { cart, setCart } = useContext(CartToggler);

  const handleEdit = (id) => {};
  const handleDelete = async (id) => {
    const token = localStorage.getItem("accessToken");
    const user = JSON.parse(localStorage.getItem("user"));
    const objReq = {
      method: "DELETE",
      headers: {
        authorization: `token ${token}`,
      },
    };
    const result = await apiRequest(
      `http://localhost:5000/${user.username}/cart/delete/${id}`,
      objReq
    );
    const resultObj = await result.json();
    setCart(resultObj);
  };

  return (
    <div className="cart-items">
      <Container>
        {cart.length ? (
          cart.map((item) => (
            <div key={item.id}>
              <Row>
                <Col xs={3}>
                  <Image src={test} alt="..." roundedCircle fluid></Image>
                </Col>
                <Col xs={6}>
                  <h6 className="mt-1 mb-3">{item.name}</h6>
                  <p className="mb-0">&#8369;{item.price}</p>
                </Col>
                <Col xs={3}>
                  <div className="mb-3 d-flex">
                    <FaEdit
                      onClick={() => handleEdit(item.id)}
                      className="cart-icon"
                      size={25}
                    />
                    <RiDeleteBinFill
                      onClick={() => handleDelete(item.id)}
                      className="cart-icon"
                      size={25}
                    />
                  </div>
                  <input
                    className="mb-0 text-center quantity"
                    type="number"
                    name="quantity"
                    min="1"
                    max="5"
                    value={item.quantity}
                    disabled
                  />
                </Col>
              </Row>
              <hr className=" mb-3" />
            </div>
          ))
        ) : (
          <p className="text-center">Cart empty</p>
        )}
      </Container>
    </div>
  );
};

export default CartItem;
