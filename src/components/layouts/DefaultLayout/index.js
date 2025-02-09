import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import Search from "../components/Search";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  // Hàm toggle overlay
  const toggleOverlay = () => {
    setIsOverlayOpen((prevState) => !prevState);
  };

  const toggleSearch = () => {
    setSearchOpen((prevState) => !prevState);
  };

  return (
    <div className={cx("wrapper")}>
      {/* Header */}
      <Header toggleOverlay={toggleOverlay} toggleSearch={toggleSearch} />

      {/* Nội dung chính */}
      <div>{children}</div>

      {/* Footer */}
      <Footer />

      {/* Overlay */}
      {isOverlayOpen && (
        <>
          {/* Lớp phủ toàn màn hình */}
          <div
            className={cx("overlay")}
            onClick={toggleOverlay} // Đóng overlay khi nhấn vào lớp phủ
          ></div>

          {/* Cart */}
          <Cart toggleOverlay={toggleOverlay} />
        </>
      )}

      {isSearchOpen && <Search toggleSearch={toggleSearch} />}
    </div>
  );
}

export default DefaultLayout;
