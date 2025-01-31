import classNames from "classnames/bind";
import { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ToastNoti from "../../components/ToastNoti";
import styles from "./Auth.module.scss";
import Button from "../../components/Button";
import Breadcrumb from "../../components/Breadcrumb";

const cx = classNames.bind(styles);

function Auth({ showToast }) {
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
      setRememberMe(true);
    }
  }, []);

  const authApi = async (endpoint, data) => {
    try {
      const response = await axios.post(
        `http://localhost:3001/api/v1/users/${endpoint}`,
        data
      );

      if (response.data?.accessToken) {
        localStorage.setItem("token", response.data.accessToken);

        if (endpoint === "signin") {
          showToast("Đăng nhập thành công!", "success");
          setTimeout(() => navigate("/"), 2000);
        } else {
          showToast("Đăng ký thành công!", "success");
          setAuth("login");

          // Xóa input sau khi đăng ký
          emailRef.current.value = "";
          passwordRef.current.value = "";
          nameRef.current.value = "";
        }

        // Ghi nhớ tài khoản nếu người dùng chọn Remember Me
        if (rememberMe) {
          localStorage.setItem("rememberedEmail", emailRef.current.value);
        } else {
          localStorage.removeItem("rememberedEmail");
        }
      } else {
        showToast("Có lỗi xảy ra, vui lòng thử lại!", "danger");
      }
    } catch (error) {
      showToast("Có lỗi xảy ra, vui lòng thử lại!", "danger");
    }
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
                <div
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      authApi("signin", {
                        email: emailRef.current.value,
                        password: passwordRef.current.value,
                      });
                    }
                  }}
                  className={cx("form")}
                >
                  <input ref={emailRef} type="text" placeholder="Email" />
                  <input
                    ref={passwordRef}
                    type="password"
                    placeholder="Password"
                  />
                  <div className={cx("remember")}>
                    <input
                      type="checkbox"
                      id="rememberMe"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <p>Remember me</p>
                  </div>
                  <Button
                    onClick={() =>
                      authApi("signin", {
                        email: emailRef.current.value,
                        password: passwordRef.current.value,
                      })
                    }
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
                <div
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      authApi("signup", {
                        email: emailRef.current.value,
                        password: passwordRef.current.value,
                        name: nameRef.current.value,
                      });
                    }
                  }}
                  className={cx("form")}
                >
                  <input ref={emailRef} type="text" placeholder="Email" />
                  <input
                    ref={passwordRef}
                    type="password"
                    placeholder="Password"
                  />
                  <input ref={nameRef} type="text" placeholder="Name" />
                  <Button
                    onClick={() =>
                      authApi("signup", {
                        email: emailRef.current.value,
                        password: passwordRef.current.value,
                        name: nameRef.current.value,
                      })
                    }
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
