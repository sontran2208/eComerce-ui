import styles from "./ProductItem.module.scss";

import { FaRegEye } from "react-icons/fa";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
const cx = classNames.bind(styles);

function ProductItem({ name, price, image, id, to }) {
  // const [cartItems, setCartItems] = useState([]);
  // const [quantity, setQuantity] = useState(1);

  // const handleAddToCart = () => {
  //   // Bước 1: Lấy giỏ hàng từ localStorage (hoặc mảng rỗng nếu chưa có)
  //   const cart = JSON.parse(localStorage.getItem("cart")) || [];

  //   // Bước 2: Tìm sản phẩm trong giỏ hàng (dựa vào id)
  //   const existingProductIndex = cart.findIndex((item) => item.id === id);

  //   if (existingProductIndex !== -1) {
  //     // Bước 3: Nếu sản phẩm đã có, tăng quantity
  //     cart[existingProductIndex].quantity += 1;
  //   } else {
  //     // Bước 4: Nếu chưa có, thêm mới với quantity = 1
  //     cart.push({ id, name, price, image, quantity: 1 });
  //   }

  //   // Bước 5: Cập nhật localStorage với giỏ hàng mới
  //   localStorage.setItem("cart", JSON.stringify(cart));

  //   // Bước 6: In ra console để kiểm tra
  //   console.log("Giỏ hàng hiện tại:", cart);
  // };
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ name, price, image, id, quantity: 1 }));
  };

  const formatCurrency = (price) => {
    return new Intl.NumberFormat("vi-VN", { minimumFractionDigits: 0 }).format(
      price
    );
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("img")}>
        <img src={image} alt={name} />
      </div>
      <div className={cx("action")}>
        <div onClick={handleAddToCart} className={cx("add")}>
          <CiShoppingCart />
        </div>
        <Link to={to}>
          <div className={cx("view")}>
            <FaRegEye />
          </div>
        </Link>
      </div>
      <div className={cx("text")}>
        <Link to="/"> {name}</Link>
        <div className={cx("price")}>{formatCurrency(price)}</div>
      </div>
    </div>
  );
}

export default ProductItem;
