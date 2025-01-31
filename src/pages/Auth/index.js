import styles from "./Auth.module.scss";
import classNames from "classnames/bind";
import { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../../components/Button";
import Breadcrumb from "../../components/Breadcrumb";
const cx = classNames.bind(styles);

function Auth() {
  const [auth, setAuth] = useState("login");
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();

  const navigate = useNavigate();

  const [rememberMe, setRememberMe] = useState(false);
  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      emailRef.current.value = savedEmail;
    }
  }, []);

  const authApi = async (endpoint, data) => {
    try {
      const response = await axios.post(
        `http://localhost:3001/api/v1/users/${endpoint}`,
        data
      );

      if (endpoint === "signin") {
        if (response.data?.accessToken) {
          localStorage.setItem("token", response.data?.accessToken);
          navigate("/");
          alert("Đăng nhập thành công !");
          console.log(localStorage.getItem("token"));
        } else {
          alert("Đăng nhập thất bại !");
        }
      } else {
        if (endpoint === "signup") {
          alert("Đăng ký thành công !");
          setAuth("login");
        }
      }
    } catch (error) {
      console.log("thất bại");
      alert(error.response?.data?.message || "Có lỗi xảy ra!");
    }
  };

  const handleLogin = () => {
    authApi("signin", {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
    if (rememberMe) {
      localStorage.setItem("rememberedEmail", emailRef.current.value);
    } else {
      localStorage.removeItem("rememberedEmail");
    }
  };
  const handleRegister = () => {
    authApi("signup", {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      name: nameRef.current.value,
    });
  };

  return (
    <div className={cx("wrapper")}>
      <Breadcrumb page={auth === "login" ? "Sign In" : "Sign Up"} />
      <Container className={cx("auth")}>
        <Row>
          <Col>
            {auth === "login" && (
              <div className={cx("login")}>
                <div className={cx("header")}>
                  <h2 className={cx("active")} onClick={() => setAuth("login")}>
                    Sign-in
                  </h2>
                  <h2 onClick={() => setAuth("signup")}>Sign-up</h2>
                </div>
                <div className={cx("form")}>
                  <input ref={emailRef} type="text" placeholder="Email" />
                  <input
                    ref={passwordRef}
                    type="password"
                    placeholder="Password"
                  />
                  <div>
                    <input
                      type="checkbox"
                      id="rememberMe"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                  </div>
                  <Button
                    onClick={() => {
                      setAuth("login");
                      handleLogin();
                    }}
                    fwidth
                  >
                    Sign In
                  </Button>
                </div>
              </div>
            )}
            {auth === "signup" && (
              <div className={cx("signup")}>
                <div className={cx("header")}>
                  <h2 onClick={() => setAuth("login")}>Sign-in</h2>
                  <h2
                    className={cx("active")}
                    onClick={() => setAuth("signup")}
                  >
                    Sign-up
                  </h2>
                </div>

                <div className={cx("form")}>
                  <input ref={emailRef} type="text" placeholder="Email" />
                  <input
                    ref={passwordRef}
                    type="password"
                    placeholder="Password"
                  />
                  <input ref={nameRef} type="name" placeholder="Name" />

                  <Button
                    onClick={() => {
                      setAuth("signup");
                      handleRegister();
                    }}
                    fwidth
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Auth;
