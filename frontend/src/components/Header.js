import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import teacubs_logo from "../assets/img/teacubs-logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignUp = () => {
    navigate("/sign-up");
  };
  return (
    <Nav className="ms-auto">
      <Button
        className="header-button yellow-outline me-2"
        onClick={handleLogin}
      >
        Sign in
      </Button>
      <Button className="header-button blue-button" onClick={handleSignUp}>
        Join now
      </Button>
    </Nav>
  );
};

const Logout = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("isLogged");
    localStorage.removeItem("isAdmin");
    setTimeout(() => {
      navigate("/");
      window.location.reload(false);
    }, 2000);
  };

  return (
    <Nav className="ms-auto logout">
      <Navbar.Text>Signed in as:</Navbar.Text>
      <NavDropdown
        title={`${user.firstname} ${user.lastname}`}
        id="collasible-nav-dropdown"
        className="account-dropdown"
      >
        <NavDropdown.Item href="#action/3.1">
          Account Information
        </NavDropdown.Item>
        <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

const Header = () => {
  const status = localStorage.getItem("isLogged");
  const isLogged = status === "true" && true;
  return (
    <div className="header">
      <header>
        <Navbar expand="md" sticky="top" className="header">
          <Container fluid="lg">
            <Navbar.Brand
              href="/"
              className="d-flex justify-content-center align-items-center"
            >
              <Image
                src={teacubs_logo}
                width="80"
                height="60"
                className="d-inline-block align-top"
                alt="Tea Cubs Logo"
              />
              <p className="m-auto h3">
                <span className="tea-span">Tea</span>
                &nbsp;
                <span className="cubs-span">Cubs</span>
              </p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="header-nav" />
            <Navbar.Collapse id="header-nav">
              <Nav className="pseudo-ul">
                <Nav.Link className="pseudo-li" href="/menu">
                  <p className="h5 m-auto pseudo-a">Menu</p>
                </Nav.Link>
                <Nav.Link className="pseudo-li" href="/reservations">
                  <p className="h5 m-auto pseudo-a">Reservations</p>
                </Nav.Link>
                <Nav.Link className="pseudo-li" href="/locations">
                  <p className="h5 m-auto pseudo-a">Locations</p>
                </Nav.Link>
              </Nav>
              {isLogged ? <Logout /> : <Login />}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
