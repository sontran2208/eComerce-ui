import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import { useState, useRef, useEffect } from "react"; // Sửa lỗi import
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../../components/Button";
import Review from "../../components/Review";
import StarsRating from "../../components/StarsRating";
import Breadcrumb from "../../components/Breadcrumb";
import paypalImage from "../../assets/img/others/paypal.png";

const cx = classNames.bind(styles);

function Product({ rating = 4, totalStars = 5 }) {
  const { id } = useParams(); // Lấy ID từ URL
  const [product, setProduct] = useState(null);
  const sliderRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(""); // Sửa state để nhận src
  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState([null]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [newReview, setNewReview] = useState({
    rating: 5, // Mặc định là 5 sao
    comment: "",
  });
  const [submitMessage, setSubmitMessage] = useState(null);
  const [authToken, setAuthToken] = useState(() =>
    localStorage.getItem("token")
  ); // 🔹 Lấy token từ localStorage
  console.log(authToken);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/v1/products/${id}`
        );
        setProduct(response.data);
        if (response.data.images?.length > 0) {
          setSelectedImage(
            `http://localhost:3001/${response.data.images[0].filepath}`
          );
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/v1/reviews",
          { params: { productId: id } }
        );
        setReviews(response.data.data);
      } catch (err) {}
    };

    fetchProduct();
    fetchReviews();
  }, [id]);
  console.log(reviews);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found.</p>;

  const MinusQuantityChange = () => {
    setQuantity(quantity - 1);
    if (quantity <= 1) {
      setQuantity(1);
    }
  };
  const AddQuantityChange = () => {
    setQuantity(quantity + 1);
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false, // Tắt nút điều hướng
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <Breadcrumb></Breadcrumb>
        <Container>
          <Row>
            <Col md={6}>
              <div className={cx("left")}>
                <Container>
                  <Row>
                    <Col md={10}>
                      <div className={cx("image")}>
                        <img src={selectedImage} alt="Selected" />
                      </div>
                    </Col>
                    <Col md={2}>
                      <div className={cx("slider")}>
                        <Slider ref={sliderRef} {...sliderSettings}>
                          {product.images.map((image, index) => (
                            <div
                              className={cx("item")}
                              key={index}
                              onClick={() => {
                                setSelectedImage(
                                  "http://localhost:3001/" + image.filepath
                                );
                                sliderRef.current.slickGoTo(index);
                              }}
                              style={{
                                cursor: "pointer",
                                padding: "5px",
                                border:
                                  selectedImage ===
                                  "http://localhost:3001/" + image.filepath
                                    ? "2px solid var(--primary)"
                                    : "none",
                              }}
                            >
                              <img
                                src={"http://localhost:3001/" + image.filepath} // Hiển thị đúng src của ảnh
                                alt={image.filename}
                                style={{ width: "100%" }}
                              />
                            </div>
                          ))}
                        </Slider>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
            <Col md={6}>
              <div className={cx("right")}>
                <h1 className={cx("title")}>{product.title}</h1>
                <h2 className={cx("price")}> ${product.price}</h2>
                <div className={cx("description")}>
                  <div className={cx("stars")}>
                    <StarsRating rating={4} />
                  </div>
                  <p>{product.description}</p>
                </div>
                <div className={cx("buttons")}>
                  <div className={cx("quantity")}>
                    <div onClick={MinusQuantityChange} className={cx("minus")}>
                      -
                    </div>
                    <div className={cx("value")}>{quantity}</div>
                    <div onClick={AddQuantityChange} className={cx("add")}>
                      +
                    </div>
                  </div>
                  <Button large>Add to cart</Button>
                </div>
                <img className={cx("paypal")} src={paypalImage}></img>
              </div>
            </Col>
          </Row>
          <Row>
            <div className={cx("reviews")}>
              <Review />
              {reviews?.map((review, index) => (
                <div
                  className={cx("review")}
                  key={index}
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    padding: "15px",
                    marginBottom: "15px",
                    backgroundColor: "var(--primary)",
                    color: "var(--active)",
                  }}
                >
                  <h3 style={{ margin: "0 0 5px 0" }}>{review?.user.name}</h3>
                  <div
                    style={{
                      display: "flex",
                      marginBottom: "5px",
                      marginRight: "10px",
                    }}
                  >
                    <StarsRating white rating={review?.rating} />
                  </div>
                  <p style={{ margin: "5px 0", color: "var(--white)" }}>
                    {review?.comment}
                  </p>

                  <small style={{ color: "#999" }}>{review?.createdAt}</small>
                </div>
              ))}
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Product;
