import { FaChevronRight } from "react-icons/fa6";
import { useEffect } from "react";
import styles from "./Cart.module.scss";
import classNames from "classnames/bind";
import CartItems from "../../../CartItems";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function Cart({ toggleOverlay }) {
  const cartItems = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  console.log(cartItems);
  const total = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemove = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

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
            remove={handleRemove(item.id)}
            name={item.name}
            cost={item.price}
            quantity={item.quantity}
            image={item.image}
          />
        ))}
      </div>

      <div className={cx("total")}>Total: ${total}</div>
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
