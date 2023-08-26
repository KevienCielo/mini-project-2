import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import teacubs_logo2 from "../assets/img/teacubs-logo-2.png";
import about_us from "../assets/img/aboutus.png";
import owner from "../assets/img/owner.png";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="tea-bg text-white">
        <Container className="py-5">
          <Row className="h-100 align-items-center py-5">
            <Col lg={6}>
              <h1 className="display-4">"It all starts with a cup"</h1>
            </Col>
            <Col lg={6} className="d-none d-lg-block">
              <Image
                src={teacubs_logo2}
                alt="teacubs-logo"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="cubs-bg py-5">
        <Container className="py-5">
          <Row className="align-items-center mb-5">
            <Col lg={6} className="order-2 order-lg-1">
              {/* <i className="fa fa-bar-chart fa-2x mb-3 text-primary" /> */}
              <h2 className="font-weight-light">Tea Cubs</h2>
              <p className="lead fst-italic text-muted mb-4 ">
                Tea Cubs specializes in tasty varieties of milk, fruit teas as
                well as yogurt smoothies, and coffee concoction. The place is a
                fusion of environmental and modern interior design which makes
                you comfortable and feeling home. Tea Cubs strives for the
                perfect balance between visual happiness and great food.
              </p>
            </Col>
            <Col lg={5} className="px-5 mx-auto order-1 order-lg-2">
              <Image
                src={about_us}
                alt="about us"
                className="img-fluid mb-4 mb-lg-0 rounded"
              />
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg={5} className="px-5 mx-auto">
              <img
                src={owner}
                alt="Cafe Owner"
                className="img-fluid mb-4 mb-lg-0 rounded"
              />
            </Col>
            <Col lg={6}>
              {/* <i className="fa fa-leaf fa-2x mb-3 text-primary" /> */}
              <h2 className="font-weight-light">Mark Dave Lee</h2>
              <p className="text-muted mb-4">
                Learn more about the owner and the story about how the business
                started.
              </p>
              <a
                href="#owner"
                className="btn btn-light px-5 rounded-pill shadow-sm"
              >
                Learn More
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutUs;
