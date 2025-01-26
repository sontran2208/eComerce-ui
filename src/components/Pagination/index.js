import React from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import styles from "./Pagination.module.scss";

const cx = classNames.bind(styles);

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Tạo danh sách các trang hiển thị (nếu cần số trang cụ thể)
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className={cx("wrapper")}>
      {/* Nút Trang trước */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          padding: "5px 10px",
          cursor: currentPage === 1 ? "not-allowed" : "pointer",
        }}
      >
        <FaChevronLeft />
      </button>

      {/* Danh sách số trang */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={cx("page-button", { active: page === currentPage })}
        >
          {page}
        </button>
      ))}

      {/* Nút Trang sau */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{
          padding: "5px 10px",
          cursor: currentPage === totalPages ? "not-allowed" : "pointer",
        }}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
