import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

import delivery_tarp from "../assets/img/delivery-tarp.jpg";
import meal_set from "../assets/img/meal-set.jpg";
import summer_promo from "../assets/img/summer-promo.jpg";
import vip_card from "../assets/img/vip-card.jpg";
import loyalty_card from "../assets/img/loyalty-card.jpg";

const FirstSection = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section>
      <Container>
        <Row className="pt-5">
          <Col lg={6} className="p-0">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <Image
                  src={delivery_tarp}
                  className="d-block w-100 img-fluid"
                  alt="Delivery"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={meal_set}
                  className="d-block w-100 img-fluid"
                  alt="Meal Set"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col
            lg={6}
            className="tea-bg text-center d-flex flex-column justify-content-center align-items-center p-5 text-wrap text-break"
          >
            <h1 className="mb-4">"It all starts with a cup"</h1>
            <p className="mb-0">
              All items are available for Pick-up or Delivery. Enjoy your
              favorite snacks, drinks, meals, and desserts in the comfort of
              your own home.
            </p>
            <p>Get your orders now!</p>
            <a
              className="btn btn-dark rounded"
              href="html/menu.html"
              role="button"
            >
              Order Now!
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const SecondSection = () => {
  return (
    <section>
      <Container>
        <Row className="mt-4">
          <Col lg={12} className="p-0">
            <img
              className="img-thumbnail img-fluid"
              src={summer_promo}
              alt="Summer Promo"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const ThirdSection = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section>
      <Container>
        <Row className="mt-4 pb-5">
          <Col lg={6} className="p-0">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <Image
                  src={vip_card}
                  className="d-block w-100 img-fluid"
                  alt="Tea Cubs VIP Card"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={loyalty_card}
                  className="d-block w-100 img-fluid"
                  alt="Tea Cubs Loyalty Card"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col
            lg={6}
            className="p-5 cubs-bg text-center d-flex flex-column justify-content-center align-items-center p-5 text-wrap text-break"
          >
            <h2 className="mb-4">Rewards..? Freebies..?</h2>
            <p className="mb-0">
              Want some free drinks or free meals? Register an account and
              become a VIP or a Loyalty card holder and accumulate reward points
              everytime you order online. Use your accumulated reward points to
              claim your freebies.
            </p>
            <p>Register an account!</p>
            <a className="btn btn-dark rounded" role="button" href="1">
              Join Us!
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const Home = () => {
  return (
    <div className="home">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
};

export default Home;
