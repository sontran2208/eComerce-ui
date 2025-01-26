import styles from "./ProductItem.module.scss";

import { FaRegEye } from "react-icons/fa";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { Container, Row, Col } from "react-bootstrap";
const cx = classNames.bind(styles);

function ProductItem({ name, price, image }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("img")}>
        <img src={image} alt={name} />
      </div>
      <div className={cx("action")}>
        <div className={cx("add")}>
          <CiShoppingCart />
        </div>
        <div className={cx("whistlist")}>
          <CiHeart />
        </div>
        <div className={cx("view")}>
          <FaRegEye />
        </div>
      </div>
      <div className={cx("text")}>
        <Link to="/"> {name}</Link>
        <div className={cx("price")}>{price}</div>
      </div>
    </div>
  );
}

export default ProductItem;
