import Breadcrumb from "../../components/Breadcrumb";
import styles from "./CartPrimary.module.scss";
import classNames from "classnames/bind";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import CartTable from "../../components/CartTable";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function CartPrimary() {
  console.log(localStorage.getItem("cart"));
  return (
    <div className={cx("wrapper")}>
      <Breadcrumb page="Cart" />
      <Container>
        <Row>
          <Col lg={12}>
            <CartTable />
          </Col>
        </Row>

        <div className={cx("coupon")}>
          <input type="text" placeholder="Coupon Code" />
          <Button variant="custom" className={cx("apply-coupon")}>
            Apply Coupon
          </Button>
        </div>

        <div className={cx("total")}>
          {/* <h1>
            Total:{" "}
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
              minimumFractionDigits: 0,
            }).format(total)}
          </h1> */}
          <Button variant="custom" className={cx("checkout-btn")}>
            Proceed to Checkout
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default CartPrimary;
