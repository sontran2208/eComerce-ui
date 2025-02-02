import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import styles from "./CartTable.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CartTable = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load giỏ hàng từ localStorage khi mở trang
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Lắng nghe sự thay đổi của localStorage từ các tab khác
  useEffect(() => {
    const handleStorageChange = () => {
      setCartItems(JSON.parse(localStorage.getItem("cart")) || []);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Cập nhật localStorage khi cartItems thay đổi, nhưng tránh ghi đè nếu rỗng
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // Xóa sản phẩm khỏi giỏ hàng
  const handleRemove = (id) => {
    setCartItems((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Tăng số lượng sản phẩm
  const handleAdd = (id) => {
    setCartItems((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 0) + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Giảm số lượng sản phẩm
  const handleSubtract = (id) => {
    setCartItems((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max((item.quantity || 0) - 1, 1) }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Tính tổng tiền
  const total = cartItems.reduce(
    (total, item) => total + (item.price ?? 0) * (item.quantity ?? 1),
    0
  );

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
              <td>${(Number(item.price) || 0).toFixed(2)}</td>
              <td>${(Number(item.price) * (item.quantity || 1)).toFixed(2)}</td>

              <td>
                <div className={cx("quantity-buttons")}>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => handleSubtract(item.id)}
                  >
                    -
                  </Button>
                  <span className="mx-2">{item.quantity}</span>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => handleAdd(item.id)}
                  >
                    +
                  </Button>
                </div>
              </td>
              <td>${(Number(item.price) * (item.quantity || 1)).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CartTable;
