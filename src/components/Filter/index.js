import React, { useState } from "react";
import { Form } from "react-bootstrap"; // Dùng React-Bootstrap để tạo Checkbox
import Slider from "rc-slider";
import styles from "./Filter.module.scss";
import classNames from "classnames/bind";
import "rc-slider/assets/index.css"; // CSS của rc-slider

const cx = classNames.bind(styles);

const Filter = () => {
  // State để lưu kích thước được chọn (chỉ 1 giá trị)
  const [selectedSize, setSelectedSize] = useState(null);
  const [priceRange, setPriceRange] = useState([1, 400]);

  // Danh sách các kích thước
  const sizes = [
    { label: "All", count: 65 },
    { label: "Small", count: 15 },
    { label: "Medium", count: 10 },
    { label: "Large", count: 22 },
  ];

  // Xử lý khi checkbox thay đổi (chỉ 1 checkbox được chọn)
  const handleCheckboxChange = (size) => {
    setSelectedSize(size); // Cập nhật kích thước được chọn
  };

  // Xử lý khi giá thay đổi
  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  return (
    <div
      className={cx("wrapper")}
      style={{ padding: "20px", background: "#f8f9fa", borderRadius: "8px" }}
    >
      <h4>FILTER</h4>

      {/* Filter by Size */}
      <h5 className={cx("title-1")} style={{ marginTop: "20px" }}>
        FILTER BY SIZE
      </h5>
      {sizes.map((size, index) => (
        <Form.Check
          key={index}
          type="checkbox"
          id={`custom-checkbox-${index}`} // Cần id duy nhất cho mỗi checkbox
          label={`${size.label} (${size.count})`}
          checked={selectedSize === size.label}
          onChange={() => handleCheckboxChange(size.label)}
          className="d-flex align-items-center"
          custom // Bỏ qua kiểu mặc định của React-Bootstrap
        >
          <input
            type="checkbox"
            className="custom-checkbox"
            id={`custom-checkbox-${index}`}
            checked={selectedSize === size.label}
            onChange={() => handleCheckboxChange(size.label)}
          />
          <label
            className={cx("custom-label")}
            htmlFor={`custom-checkbox-${index}`}
            style={{ marginLeft: "8px" }}
          >
            {size.label} ({size.count})
          </label>
        </Form.Check>
      ))}

      {/* Filter by Price */}
      <h5 className={cx("title-2")} style={{ marginTop: "20px" }}>
        FILTER BY PRICE
      </h5>
      <Slider
        range
        min={1}
        max={400}
        defaultValue={[1, 400]}
        value={priceRange}
        onChange={handlePriceChange}
        trackStyle={[{ backgroundColor: "#fc7c7c" }]}
        handleStyle={[{ borderColor: "#fc7c7c" }, { borderColor: "#fc7c7c" }]}
      />
      <p style={{ marginTop: "10px", fontWeight: "bold" }}>
        Price: ${priceRange[0]} - ${priceRange[1]}
      </p>
    </div>
  );
};

export default Filter;
