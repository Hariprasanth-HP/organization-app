import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logged } from "../../store/Display/action";
import { useSelector } from "react-redux";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.AddUserReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Email: ${email}, Password: ${password}`,
      user.email,
      user.password
    );
    if (email === user.email && password === user.password) {
      setIsError(false);

      dispatch(logged(true));
    } else {
      setIsError(true);
      dispatch(logged(false));
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="text-center">Login</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button
                  style={{ marginTop: "20px" }}
                  variant="primary"
                  type="submit"
                  block
                >
                  Login
                </Button>
                {isError && (
                  <p style={{ color: "red" }}>
                    Please Enter the correct credentials
                  </p>
                )}
                <Button
                  style={{ marginTop: "20px", marginLeft: "50px" }}
                  variant="primary"
                  type="submit"
                  block
                >
                  New User
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
