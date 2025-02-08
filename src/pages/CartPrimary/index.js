import Breadcrumb from "../../components/Breadcrumb";
import styles from "./CartPrimary.module.scss";
import classNames from "classnames/bind";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import CartTable from "../../components/CartTable";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { clearCart } from "../../redux/cartSlice";
import { successToast, dangerToast } from "../../redux/toastSlice";
const cx = classNames.bind(styles);
function CartPrimary() {
  const dispatch = useDispatch();
  const phoneRef = useRef();
  const nameRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const countryRef = useRef();

  const token = localStorage.getItem("token");

  const [orderedProducts, setOrderedProducts] = useState([]);

  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems.items);
  const placeOrder = async () => {
    const shippingAddress = {
      phone: phoneRef.current.value,
      name: nameRef.current.value,
      address: addressRef.current.value,
      city: cityRef.current.value,
      postcode: "100000",
      state: stateRef.current.value,
      country: countryRef.current.value,
    };
    try {
      if (cartItems.items.lenght === 0) {
        alert("rỏ hàng trống");
        return;
      }

      cartItems.items.map((prod) =>
        setOrderedProducts((prev) => [
          ...prev,
          {
            id: prod.id,
            product_unit_price: parseFloat(prod.price),
            product_quantity: parseFloat(prod.quantity),
          },
        ])
      );
      const orderData = {
        shippingAddress: shippingAddress,
        orderedProducts: orderedProducts,
      };
      console.log(orderData);

      const response = await axios.post(
        "http://localhost:3001/api/v1/orders",
        orderData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        dispatch(dangerToast({ message: "Đặt hàng thành công !!!" }));
        dispatch(clearCart());
        setOrderedProducts([]);
      }
    } catch (error) {
      dispatch(
        dangerToast({
          message: error.response.data.message.map((err, index) => (
            <span key={index}>
              {err.replace("shippingAddress.", "")}
              <br />
            </span>
          )),
        })
      );
    }
  };
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
          <input ref={phoneRef} type="text" placeholder="Số điện thoại" />
          <input ref={nameRef} type="text" placeholder="Tên" />
          <input ref={addressRef} type="text" placeholder="Địa chỉ" />
          <input ref={stateRef} type="text" placeholder="Tỉnh" />
          <input ref={cityRef} type="text" placeholder="Thành phố" />
          <input ref={countryRef} type="text" placeholder="Quốc gia" />

          <Button
            variant="custom"
            onClick={placeOrder}
            className={cx("checkout-btn")}
          >
            Đặt hàng
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default CartPrimary;
