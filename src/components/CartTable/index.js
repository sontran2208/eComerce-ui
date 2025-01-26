import React, { useState } from "react";
import image from "../../assets/img/others/hero-mini-shape1.png";
import { Table, Button } from "react-bootstrap";
import styles from "./CartTable.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CartTable = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: image,
      product: "Product Name Here",
      unitPrice: 22.0,
      quantity: 1,
    },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  return (
    <div className={cx("wrapper")}>
      <Table className={cx("table")} responsive bordered hover>
        <thead>
          <tr>
            <th>Remove</th>
            <th>Images</th>
            <th>Product</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <Button onClick={() => handleRemove(item.id)}>&times;</Button>
              </td>
              <td>
                <img
                  src={item.image}
                  alt="product"
                  style={{ width: 50, height: 50 }}
                />
              </td>
              <td>{item.product}</td>
              <td>${item.unitPrice.toFixed(2)}</td>
              <td>
                <div className={cx("quantity-buttons")}>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </Button>
                  <span className="mx-2">{item.quantity}</span>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </Button>
                </div>
              </td>
              <td>${(item.unitPrice * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CartTable;
