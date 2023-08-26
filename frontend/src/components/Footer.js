import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Collapse from "react-bootstrap/Collapse";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { BsFillPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useState, createContext, useContext } from "react";

const FooterToggler = createContext(null);

const FirstColumn = () => {
  const { open, handleToggle } = useContext(FooterToggler);

  return (
    <>
      <Col xl={3} md={4} className="mx-auto shfooter">
        <h5 className="my-2 font-weight-bold d-none d-md-block">
          Contact Info
        </h5>
        <div
          className="d-md-none title"
          onClick={() => {
            handleToggle(0);
          }}
          aria-expanded={open[0]}
          aria-controls="contact-info"
        >
          <div className=" d-flex justify-content-between align-items-center">
            <span className=" align-self-center my-3 font-weight-bold">
              <h5>Contact Info</h5>
            </span>
            <span className=" align-self-center my-3 navbar-toggler">
              <FaAngleDown className="fas fa-angle-down" />
              <FaAngleUp className="fas fa-angle-up" />
            </span>
          </div>
        </div>
        <Collapse in={open[0]}>
          <ul className="list-unstyled" id="contact-info">
            <li className="mb-3">
              <span className="me-3">
                <FaHome size={25} className="icons" />
              </span>
              <span>
                2nd floor CCN Bldg. Onjiangco St., Sta. Veronica District,
                Guimba, Philippines, 3115
              </span>
            </li>
            <li className="mb-3">
              <span className="d-inline-block me-3">
                <BsFillPhoneFill size={25} className="icons" />
              </span>
              <span>0916 567 5405</span>
            </li>
            <li className="mb-3">
              <span className=" d-inline-block me-3">
                <MdEmail size={25} className="icons" />
              </span>
              <span>teacubsguimba@gmail.com</span>
            </li>
            <li className=" mt-4">
              <Nav className="m-0 p-0 socials">
                <Nav.Link
                  href="https://www.facebook.com/teacubsguimba"
                  target="_blank"
                  className="m-0 mb-3 me-3 p-0"
                >
                  <FaFacebook size={30} className="icons" />
                </Nav.Link>
                <Nav.Link
                  href="https://www.instagram.com/teacubsph/"
                  target="_blank"
                  className="m-0 mb-3 me-3 p-0"
                >
                  <FaInstagram size={30} className="icons" />
                </Nav.Link>
                <Nav.Link href="/" className="m-0 mb-3 me-3 p-0">
                  <FaTwitter size={30} className="icons" />
                </Nav.Link>
                <Nav.Link href="/" className="m-0 mb-3 me-3 p-0">
                  <FaLinkedin size={30} className="icons" />
                </Nav.Link>
              </Nav>
            </li>
          </ul>
        </Collapse>
      </Col>
    </>
  );
};

const SecondColumn = () => {
  const { open, handleToggle } = useContext(FooterToggler);

  return (
    <>
      <Col xl={3} md={4} className="mx-auto shfooter">
        <h5 className="my-2 font-weight-bold d-none d-md-block">Information</h5>
        <div
          className="d-md-none title"
          onClick={() => {
            handleToggle(1);
          }}
          aria-expanded={open[1]}
          aria-controls="information"
        >
          <div className=" d-flex justify-content-between align-items-center">
            <span className=" align-self-center my-3 font-weight-bold">
              <h5>Information</h5>
            </span>
            <span className=" align-self-center my-3 navbar-toggler">
              <FaAngleDown className="fas fa-angle-down" />
              <FaAngleUp className="fas fa-angle-up" />
            </span>
          </div>
        </div>
        <Collapse in={open[1]}>
          <ul className="list-unstyled" id="information">
            <li className="mb-3">
              <Nav.Link href="/about-us">
                <span className="navlink">About Us</span>
              </Nav.Link>
            </li>
            <li className="mb-3">
              <Nav.Link href="/delivery-information">
                <span className="navlink">Delivery Information</span>
              </Nav.Link>
            </li>
            <li className="mb-3">
              <Nav.Link href="/privacy-policy">
                <span className="navlink">Privacy Policy</span>
              </Nav.Link>
            </li>
            <li className="">
              <Nav.Link href="/terms-and-conditions">
                <span className="navlink">Terms & Conditions</span>
              </Nav.Link>
            </li>
          </ul>
        </Collapse>
      </Col>
    </>
  );
};

const ThirdColumn = () => {
  const { open, handleToggle } = useContext(FooterToggler);

  return (
    <>
      <Col xl={3} md={4} className="mx-auto shfooter">
        <h5 className="my-2 font-weight-bold d-none d-md-block">My Account</h5>
        <div
          className="d-md-none title"
          onClick={() => {
            handleToggle(2);
          }}
          aria-expanded={open[2]}
          aria-controls="my-account"
        >
          <div className=" d-flex justify-content-between align-items-center">
            <span className=" align-self-center my-3 font-weight-bold">
              <h5>My Account</h5>
            </span>
            <span className=" align-self-center my-3 navbar-toggler">
              <FaAngleDown className="fas fa-angle-down" />
              <FaAngleUp className="fas fa-angle-up" />
            </span>
          </div>
        </div>
        <Collapse in={open[2]}>
          <ul className="list-unstyled" id="my-account">
            <li className="mb-3">
              <Nav.Link href="/account/information">
                <span className="navlink">Account Information</span>
              </Nav.Link>
            </li>
            <li className="mb-3">
              <Nav.Link href="/account/order-history">
                <span className="navlink">Order History</span>
              </Nav.Link>
            </li>
            <li className="mb-3">
              <Nav.Link href="/account/favorites">
                <span className="navlink">Favorites</span>
              </Nav.Link>
            </li>
          </ul>
        </Collapse>
      </Col>
    </>
  );
};

const FourthColumn = () => {
  return (
    <>
      <Col xl={3} md={12} className="mx-auto">
        <h5 className="my-2 font-weight-bold">Subscribe</h5>
        <p className="text-muted">
          Subscribe to our newsletter and stay up to date with new items in our
          menu, promos, and exclusive reawards.
        </p>
        <Form>
          <InputGroup className="mb-3">
            <Form.Control
              type="email"
              placeholder="Enter email address"
              aria-label="Recipient's email"
              aria-describedby="newsletter"
            />
            <Button type="submit" className="brown-button" id="subscribe">
              Subscribe
            </Button>
          </InputGroup>
        </Form>
      </Col>
    </>
  );
};

const Footer = () => {
  const [open, setOpen] = useState([false, false, false]);

  const handleToggle = (ind) => {
    setOpen(
      open.map((value, index) => {
        if (index === ind) {
          value = !value;
        }
        return value;
      })
    );
  };

  return (
    <div className="footer">
      <footer id="footer" className="d-flex-column">
        <Container className="text-left" fluid="lg">
          <Row>
            <FooterToggler.Provider value={{ open, handleToggle }}>
              <FirstColumn />
              <hr className="clearfix w-100 d-md-none mb-0" />
              <SecondColumn />
              <hr className="clearfix w-100 d-md-none mb-0" />
              <ThirdColumn />
              <hr className="clearfix w-100 d-lg-none mb-0" />
              <FourthColumn />
            </FooterToggler.Provider>
          </Row>
          <Row className="divider mb-4 border-dark"></Row>
          <Row>
            <Col>
              <p className="text-muted text-start">
                Copyright &copy; {new Date().getFullYear()}, Tea Cubs Cafe. All
                rights reserved.
              </p>
            </Col>
            <Col>
              <Container className=" d-flex justify-content-end">
                <Navbar className=" m-0 p-0 border-0">
                  <Nav className="m-0 p-0 navhead">
                    <Nav.Link className="m-0 me-3 p-0 pseudo-li" href="/">
                      <span>Home</span>
                    </Nav.Link>
                    <Nav.Link className="m-0 me-3 p-0 pseudo-li" href="/menu">
                      <span>Menu</span>
                    </Nav.Link>
                    <Nav.Link
                      className="m-0 me-3 p-0 pseudo-li"
                      href="/reservations"
                    >
                      <span>Reservations</span>
                    </Nav.Link>
                    <Nav.Link
                      className="m-0 me-3 p-0 pseudo-li"
                      href="/locations"
                    >
                      <span>Locations</span>
                    </Nav.Link>
                  </Nav>
                </Navbar>
              </Container>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
