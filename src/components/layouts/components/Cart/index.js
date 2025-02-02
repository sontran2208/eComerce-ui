import { FaChevronRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import styles from "./Cart.module.scss";
import classNames from "classnames/bind";
import CartItems from "../../../CartItems";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function Cart({ toggleOverlay }) {
  // 🔹 Sử dụng state để quản lý giỏ hàng
  const [cartItems, setCartItems] = useState([]);

  // 🔹 Load giỏ hàng từ localStorage khi mở component
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      setCartItems(JSON.parse(localStorage.getItem("cart")) || []);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // 🔹 Hàm xóa sản phẩm khỏi giỏ hàng
  const handleRemove = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems); // Cập nhật state
    localStorage.setItem("cart", JSON.stringify(updatedCartItems)); // Cập nhật localStorage
    console.log(localStorage.getItem("cart"));
  };

  // 🔹 Tính tổng tiền
  const total = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <h2>Cart</h2>
        <div onClick={toggleOverlay} className={cx("close")}>
          <FaChevronRight />
        </div>
      </div>

      <div className={cx("content")}>
        {cartItems.map((item) => (
          <CartItems
            key={item.id} // 🔹 Thêm key tránh lỗi React
            remove={handleRemove}
            name={item.name}
            cost={item.price}
            quantity={item.quantity}
            image={item.image}
            id={item.id} // 🔹 Truyền id để có thể xóa
          />
        ))}
      </div>

      <div className={cx("total")}>Total: ${total.toLocaleString("vi-VN")}</div>
      <div className={cx("button")}>
        <Link to="/cart">
          <button onClick={toggleOverlay}>View Cart</button>
        </Link>
        <button onClick={toggleOverlay}>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
