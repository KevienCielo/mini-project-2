import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
// import { FaFacebookF, FaGoogle } from "react-icons/fa";
import apiRequest from "../datafetch/apiRequest";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [variant, setVariant] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const objReq = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `username=${username}&password=${password}`,
    };
    const result = await apiRequest("http://localhost:5000/login", objReq);
    const resultObj = await result.json();

    if (resultObj.Code === "200") {
      setVariant("success");
      setSuccessMsg(resultObj.Msg);

      localStorage.setItem("accessToken", resultObj.accessToken);
      localStorage.setItem("isLogged", "true");
      localStorage.setItem(
        "user",
        JSON.stringify({
          firstname: resultObj.firstname,
          lastname: resultObj.lastname,
          username: resultObj.username,
        })
      );
      localStorage.setItem("admin", resultObj.isAdmin);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setVariant("danger");
      setSuccessMsg(resultObj.Msg);
    }
  };

  return (
    <div className="login">
      <Container fluid="lg">
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col>
            <Card className="bg-white my-5 mx-auto login-card">
              <Card.Body className="p-5 w-100 d-flex flex-column">
                <Alert key={variant} variant={variant}>
                  {successMsg}
                </Alert>
                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                <hr />
                <Form onSubmit={handleLogin}>
                  <Form.Label htmlFor="username">Username</Form.Label>
                  <Form.Control
                    className="mb-4 w-100"
                    label="Username"
                    placeholder="Enter username"
                    id="username"
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                  <Form.Label htmlFor="password">Password</Form.Label>
                  <Form.Control
                    className="mb-4 w-100"
                    label="Password"
                    placeholder="Enter password"
                    id="password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <Form.Check
                    id="remember"
                    className="mb-4"
                    label="Remember password"
                  />
                  <Button type="submit" className="w-100">
                    Login
                  </Button>
                </Form>
                {/* <hr className="my-4" />
                <Button className="mb-2 w-100 google-button">
                  <FaGoogle className="mx-2" />
                  Sign in with google
                </Button>
                <Button className="mb-4 w-100 facebook-button">
                  <FaFacebookF className="mx-2" />
                  Sign in with facebook
                </Button> */}
                <hr className="my-4" />
                <div>
                  <p className=" text-center">
                    Don't have an account yet? &nbsp;
                    <span>
                      <Link to="/login">Sign in</Link>
                    </span>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
