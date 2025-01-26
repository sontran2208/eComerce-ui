import { FaChevronRight } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import styles from "./Search.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Search({ toggleSearch }) {
  return (
    <div className={cx("wrapper")}>
      <div onClick={toggleSearch} className={cx("exit")}>
        <FaChevronRight />
      </div>
      <div className={cx("search")}>
        <input type="text" placeholder="Search products" />
        <IoIosSearch />
      </div>
    </div>
  );
}

export default Search;
