import { FaChevronRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import styles from "./Cart.module.scss";
import classNames from "classnames/bind";
import CartItems from "../../../CartItems";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../../../redux/cartSlice";
const cx = classNames.bind(styles);

function Cart({ toggleOverlay }) {
  // // 🔹 Sử dụng state để quản lý giỏ hàng
  // const [cartItems, setCartItems] = useState([]);

  // // 🔹 Load giỏ hàng từ localStorage khi mở component
  // useEffect(() => {
  //   const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  //   setCartItems(storedCart);
  // }, []);

  // useEffect(() => {
  //   const handleStorageChange = () => {
  //     setCartItems(JSON.parse(localStorage.getItem("cart")) || []);
  //   };
  //   window.addEventListener("storage", handleStorageChange);
  //   return () => window.removeEventListener("storage", handleStorageChange);
  // }, []);

  // // 🔹 Hàm xóa sản phẩm khỏi giỏ hàng

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  // 🔹 Tính tổng tiền
  const total = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  console.log(cartItems);

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
