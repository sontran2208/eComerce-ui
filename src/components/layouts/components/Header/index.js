import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import styles from "./Header.module.scss";
import NavBtn from "../NavBtn";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import logo from "../../../../assets/img/logo/logo.png";
import { Container, Row, Col } from "react-bootstrap";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Header({ toggleOverlay, toggleSearch }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("top")}>
        {/* <div className={cx("top-inner")}> */}
        <Container>
          <Row>
            <Col lg={6} md={12} sm={12} className={cx("welcome")}>
              <p>World Wide Completely Free Returns and Free Shipping</p>
            </Col>

            <Col lg={6} md={12} sm={12} className={cx("infor")}>
              <p className={cx("phone")}>+00 123 456 789</p>
              <p className={cx("email")}>demo@example.com</p>
              <Dropdown className={cx("account")}>
                <Dropdown.Toggle
                  className={cx("dropdown-toggle")}
                  id="dropdown-basic"
                >
                  Account
                </Dropdown.Toggle>

                <Dropdown.Menu className={cx("dropdown-menu")}>
                  <Dropdown.Item
                    className={cx("dropdown-item")}
                    href="#/my-account"
                  >
                    My Account
                  </Dropdown.Item>
                  <Dropdown.Item className={cx("dropdown-item")} href="#/login">
                    Login
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Container>
        {/* </div> */}
      </div>

      <div className={cx("bottom")}>
        <Container className={cx("bottom-inner")}>
          <div className={cx("image")}>
            <img
              className={cx("logo")}
              referrerpolicy="origin-when-cross-origin"
              src={logo}
            />
          </div>
          <div className={cx("nav")}>
            <NavBtn to="home" label="Home" />
            <NavBtn to="shop" label="Shop" />
            <NavBtn to="cart" label="Cart" />
          </div>
          <div className={cx("right")}>
            <div onClick={toggleSearch} className={cx("search")}>
              <CiSearch />
            </div>
            <div className={cx("whishlist")}>
              <CiHeart />
            </div>
            <div onClick={toggleOverlay} className={cx("cart")}>
              <CiShoppingCart className={cx("icon")} />
              <div className={cx("count")}>2</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Header;
