import shipping1 from "../../../../assets/img/others/shipping1.png";
import shipping2 from "../../../../assets/img/others/shipping2.png";
import shipping3 from "../../../../assets/img/others/shipping3.png";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import { MdPhoneAndroid } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <Container>
        <Row className={cx("shipping")}>
          <Col lg={4} md={6} sm={12} className={cx("infor")}>
            <img src={shipping1} />
            <div className={cx("text")}>
              <h3>Free Shipping</h3>
              <p>Capped at $39 per order</p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} className={cx("infor")}>
            <img src={shipping2} />
            <div className={cx("text")}>
              <h3>Card Payments</h3>
              <p>12 Months Installments</p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} className={cx("infor")}>
            <img src={shipping3} />
            <div className={cx("text")}>
              <h3>Easy Returns</h3>
              <p>Shop with Confidence</p>
            </div>
          </Col>
        </Row>

        <Row className={cx("main")}>
          <Col lg={4} md={6} sm={12} className={cx("left")}>
            <h3>Contact Us</h3>
            <div className={cx("infor")}>
              <p>
                If you have any question.please contact us at{" "}
                <a href="#">demo@example.com</a>
              </p>
            </div>
            <div className={cx("contact")}>
              <div className={cx("address")}>
                <div className={cx("icon")}>
                  <FaMapMarkerAlt />
                </div>
                <p>Your address goes here. 123, Address.</p>
              </div>
              <div className={cx("phone")}>
                <div className={cx("icon")}>
                  <MdPhoneAndroid />
                </div>
                <div className={cx("number")}>
                  <p>+00 123 456 789</p>
                  <p>+00 123 456 789</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} className={cx("middle")}>
            <div className={cx("information")}>
              <h3>INFORMATION</h3>
              <ul>
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/">Delivery information</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/">Sales</Link>
                </li>
                <li>
                  <Link to="/">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/">Shipping Policy</Link>
                </li>
                <li>
                  <Link to="/">EMI Payment</Link>
                </li>
              </ul>
            </div>
            <div className={cx("account")}>
              <h3>ACCOUNT</h3>
              <ul>
                <li>
                  <Link to="/">My account</Link>
                </li>
                <li>
                  <Link to="/">My orders</Link>
                </li>
                <li>
                  <Link to="/">Returns</Link>
                </li>
                <li>
                  <Link to="/">Shipping</Link>
                </li>
                <li>
                  <Link to="/">Wishlist</Link>
                </li>
                <li>
                  <Link to="/">How Does It Work</Link>
                </li>
                <li>
                  <Link to="/">Merchant Sign Up</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} className={cx("right")}>
            <h3>NEWS LETTER</h3>
            <p>If you have any question.please contact us at</p>
            <Link to="/">Send Us a Email</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
