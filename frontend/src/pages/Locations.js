import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FaMagnifyingGlass } from "react-icons/fa6";

const Locations = () => {
  return (
    <div className="locations">
      <Container fluid className="p-0 m-0">
        <Row>
          <Col lg={4}>
            <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white container-fluid p-0 m-0 lgroup">
              <form className="navbar-form form-inline">
                <div className="input-group search-box">
                  <input
                    type="text"
                    id="search"
                    className="form-control"
                    placeholder="Search here..."
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <FaMagnifyingGlass size={20} />
                    </span>
                  </div>
                </div>
              </form>
              <div className="list-group list-group-flush border-bottom scrollarea">
                <a
                  href="#1"
                  className="list-group-item list-group-item-action active py-3 lh-tight"
                  aria-current="true"
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <strong className="mb-1">Tea Cubs Guimba</strong>
                    <small>5km</small>
                  </div>
                  <div className="col-7 mb-1 small">
                    2nd floor AMA Bldg Onjiangco St., Brgy. Sta. Veronica, 3115
                    Guimba, Philippines 3115 Guimba, Philippines
                  </div>
                </a>
                <a
                  href="#1"
                  className="list-group-item list-group-item-action py-3 lh-tight"
                >
                  <div className="d-flex  align-items-center justify-content-between">
                    <strong className="mb-1">Tea Cubs Roxas Bagumbayan</strong>
                    <small class="text-muted">456km</small>
                  </div>
                  <div className="col-7 mb-1 small">
                    Naomi's Business Center Villarisis Street Brgy. Bagumbayan
                    Roxas, Oriental Mindoro, Philippines
                  </div>
                </a>
                <a
                  href="#1"
                  className="list-group-item list-group-item-action py-3 lh-tight"
                >
                  <div className="d-flex  align-items-center justify-content-between">
                    <strong className="mb-1">Tea Cubs Roxas San Mariano</strong>
                    <small class="text-muted">448km</small>
                  </div>
                  <div className="col-7 mb-1 small">
                    Orkidyas Street, San Mariano Roxas, Oriental Mindoro,
                    Philippines
                  </div>
                </a>
                <a
                  href="#1"
                  className="list-group-item list-group-item-action py-3 lh-tight"
                >
                  <div className="d-flex  align-items-center justify-content-between">
                    <strong className="mb-1">Tea Cubs</strong>
                    <small class="text-muted">--km</small>
                  </div>
                  <div className="col-7 mb-1 small">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </a>
                <a
                  href="#1"
                  className="list-group-item list-group-item-action py-3 lh-tight"
                >
                  <div className="d-flex  align-items-center justify-content-between">
                    <strong className="mb-1">Tea Cubs</strong>
                    <small class="text-muted">--km</small>
                  </div>
                  <div className="col-7 mb-1 small">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </a>
                <a
                  href="#1"
                  className="list-group-item list-group-item-action py-3 lh-tight"
                >
                  <div className="d-flex  align-items-center justify-content-between">
                    <strong className="mb-1">Tea Cubs</strong>
                    <small class="text-muted">--km</small>
                  </div>
                  <div className="col-7 mb-1 small">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </a>
                <a
                  href="#1"
                  className="list-group-item list-group-item-action py-3 lh-tight"
                >
                  <div className="d-flex  align-items-center justify-content-between">
                    <strong className="mb-1">Tea Cubs</strong>
                    <small class="text-muted">--km</small>
                  </div>
                  <div className="col-7 mb-1 small">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </a>
                <a
                  href="#1"
                  className="list-group-item list-group-item-action py-3 lh-tight"
                >
                  <div className="d-flex  align-items-center justify-content-between">
                    <strong className="mb-1">Tea Cubs</strong>
                    <small class="text-muted">--km</small>
                  </div>
                  <div className="col-7 mb-1 small">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </a>
                <a
                  href="#1"
                  className="list-group-item list-group-item-action py-3 lh-tight"
                >
                  <div className="d-flex  align-items-center justify-content-between">
                    <strong className="mb-1">Tea Cubs</strong>
                    <small class="text-muted">--km</small>
                  </div>
                  <div className="col-7 mb-1 small">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </a>
                <a
                  href="#1"
                  className="list-group-item list-group-item-action py-3 lh-tight"
                >
                  <div className="d-flex  align-items-center justify-content-between">
                    <strong className="mb-1">Tea Cubs</strong>
                    <small class="text-muted">--km</small>
                  </div>
                  <div className="col-7 mb-1 small">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <div class="embed-responsive w-100 h-100 p-0 m-0">
              <iframe
                title="google-map"
                class="embed-responsive-item w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122931.50045637604!2d120.66755809852344!3d15.665775379859234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33912d1ff3eb013d%3A0x2d8b15b5ebe80d58!2sGuimba%2C%20Nueva%20Ecija!5e0!3m2!1sen!2sph!4v1688115089059!5m2!1sen!2sph"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Locations;
