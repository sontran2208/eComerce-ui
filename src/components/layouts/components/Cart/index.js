import { FaChevronRight } from "react-icons/fa6";
import image1 from "../../../../assets/img/product/product1.png";
import image2 from "../../../../assets/img/product/product2.png";
import image3 from "../../../../assets/img/product/product3.png";
import styles from "./Cart.module.scss";
import classNames from "classnames/bind";
import CartItems from "../../../CartItems";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function Cart({ toggleOverlay }) {
  const cartItems = [
    { name: "Product 1", cost: 10, quantity: 1, image: image1 },
    { name: "Product 2", cost: 20, quantity: 2, image: image2 },
    { name: "Product 3", cost: 30, quantity: 3, image: image3 },
  ];
  const total = cartItems.reduce(
    (total, item) => total + item.cost * item.quantity,
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
            name={item.name}
            cost={item.cost}
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
