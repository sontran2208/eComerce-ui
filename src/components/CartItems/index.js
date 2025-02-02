import { HiOutlineXCircle } from "react-icons/hi2";
import styles from "./CartItems.module.scss";
import className from "classnames/bind";

const cx = className.bind(styles);

function CartItems({ name, cost, quantity, image, remove, id }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("remove")} onClick={() => remove(id)}>
        <HiOutlineXCircle />
      </div>
      <img src={image} alt={name} />
      <div className={cx("details")}>
        <h3>{name}</h3>
        <div className={cx("info")}>
          <p> {quantity}</p>
          <span>x</span>
          <p> {cost} đ</p>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
