import styles from "./Review.module.scss";
import className from "classnames/bind";
import Button from "../../components/Button";
import StarsRating from "../../components/StarsRating";
import { useState } from "react";
const cx = className.bind(styles);

function Review() {
  // State lưu rating và description
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  // Hàm xử lý khi chọn số sao
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  // Hàm xử lý khi gửi đánh giá
  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating && description) {
      alert(`Rating: ${rating}\nDescription: ${description}`);
      setRating(0); // Reset rating
      setDescription(""); // Reset description
    } else {
      alert("Please fill out all fields.");
    }
  };
  return (
    <div className={cx("wrapper")}>
      {/* Rating */}
      <div className={cx("rating")}>
        <span style={{ marginRight: "10px" }}>Rating:</span>
        <StarsRating rating={rating} onClick={handleRatingChange} />
      </div>

      {/* Description */}
      <div className={cx("description")}>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write your review here..."
          className={cx("text")}
        />

        {/* Submit Button */}
        <Button large onClick={handleSubmit}>
          Submit Review
        </Button>
      </div>
    </div>
  );
}
export default Review;
