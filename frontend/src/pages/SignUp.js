import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import { Link } from "react-router-dom";
import apiRequest from "../datafetch/apiRequest";

const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkpassword, setCheckpassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [variant, setVariant] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const objReq = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `firstname=${firstname}&lastname=${lastname}&username=${username}&password=${password}&email=${email}&isAdmin=${false}`,
    };
    const result = await apiRequest("http://localhost:5000/sign-up", objReq);
    const resultObj = await result.json();
    if (resultObj.Code === "200") {
      setVariant("success");
      setSuccessMsg(resultObj.Msg);
    } else {
      setVariant("danger");
      setSuccessMsg(resultObj.Msg);
    }
  };

  return (
    <div className="signup">
      <Container fluid="lg">
        <div className="signup-card p-5 m-5">
          <Row>
            <Col>
              <Alert key={variant} variant={variant}>
                {successMsg}
              </Alert>
              <h2 className="fw-bold mb-2 text-center">Sign up</h2>
            </Col>
          </Row>
          <hr />
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6} xs={12} className=" my-2">
                <Form.Label htmlFor="firstname">First name</Form.Label>
                <Form.Control
                  type="text"
                  id="firstname"
                  placeholder="Enter first name"
                  value={firstname}
                  onChange={(event) => setFirstname(event.target.value)}
                />
              </Col>
              <Col md={6} xs={12} className=" my-2">
                <Form.Label htmlFor="lastname">Last name</Form.Label>
                <Form.Control
                  type="text"
                  id="lastname"
                  placeholder="Enter last name"
                  value={lastname}
                  onChange={(event) => setLastname(event.target.value)}
                />
              </Col>
              <Col xs={12} className=" my-2">
                <Form.Label htmlFor="username">Username</Form.Label>
                <Form.Control
                  type="text"
                  id="username"
                  placeholder="Enter username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </Col>
              <Col xs={12} className=" my-2">
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Col>
              <Col md={6} xs={12} className=" my-2">
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Col>
              <Col md={6} xs={12} className=" my-2">
                <Form.Label htmlFor="passwordCheck">
                  Confirm Password
                </Form.Label>
                <Form.Control
                  type="password"
                  id="passwordCheck"
                  placeholder="Re-enter password"
                  value={checkpassword}
                  onChange={(event) => setCheckpassword(event.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col className=" d-grid mt-4">
                <Button type="submit">Sign up</Button>
              </Col>
            </Row>
          </Form>
          <hr />
          <Row>
            <Col>
              <p className=" text-center">
                Already have an account? &nbsp;
                <span>
                  <Link to="/login">Sign in</Link>
                </span>
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
