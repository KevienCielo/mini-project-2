import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Footer from "../components/Footer";
import Image from "react-bootstrap/Image";
import { Outlet } from "react-router-dom";
import teacubs_logo from "../assets/img/teacubs-logo.png";

const Header = () => {
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
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

const LoginLayout = () => {
  return (
    <div className="login-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LoginLayout;
