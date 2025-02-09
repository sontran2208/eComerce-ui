import shipping1 from "../../../../assets/img/others/shipping1.png";
import shipping2 from "../../../../assets/img/others/shipping2.png";
import shipping3 from "../../../../assets/img/others/shipping3.png";
import { Container, Row, Col } from "react-bootstrap";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <Container>
        <Row className={cx("shipping")}>
          <Col lg={4} md={6} sm={12} className={cx("infor")}>
            <img src={shipping1} alt="Free Shipping" />
            <div className={cx("text")}>
              <h3>Free Shipping</h3>
              <p>Capped at $39 per order</p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} className={cx("infor")}>
            <img src={shipping2} alt="Card Payments" />
            <div className={cx("text")}>
              <h3>Card Payments</h3>
              <p>12 Months Installments</p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} className={cx("infor")}>
            <img src={shipping3} alt="Easy Returns" />
            <div className={cx("text")}>
              <h3>Easy Returns</h3>
              <p>Shop with Confidence</p>
            </div>
          </Col>
        </Row>
      </Container>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2455.7281440600764!2d105.86124142314983!3d20.869114394458364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135b3fd335aa241%3A0xea2862b970052170!2zVGjGsOG7nW5nIFTDrW4sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1739057648874!5m2!1svi!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Footer;
