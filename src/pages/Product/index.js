import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import { useState, useRef } from "react"; // Sửa lỗi import
import Button from "../../components/Button";
import Breadcrumb from "../../components/Breadcrumb";
import imageService1 from "../../assets/img/others/services1.png";
import imageService2 from "../../assets/img/others/services2.png";
import imageService3 from "../../assets/img/others/services3.png";
import imageService4 from "../../assets/img/others/services4.png";
import paypalImage from "../../assets/img/others/paypal.png";

const cx = classNames.bind(styles);

function Product({ rating = 4, totalStars = 5 }) {
  const images = [
    { id: 1, src: imageService1, alt: "Service 1" },
    { id: 2, src: imageService2, alt: "Service 2" },
    { id: 3, src: imageService3, alt: "Service 3" },
    { id: 4, src: imageService4, alt: "Service 4" },
  ];
  const [quantity, setQuantity] = useState(1);
  const MinusQuantityChange = () => {
    setQuantity(quantity - 1);
    if (quantity <= 1) {
      setQuantity(1);
    }
  };
  const AddQuantityChange = () => {
    setQuantity(quantity + 1);
  };
  const [selectedImage, setSelectedImage] = useState(images[0].src); // Sửa state để nhận src
  const sliderRef = useRef(null);

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
                          {images.map((image, index) => (
                            <div
                              className={cx("item")}
                              key={index}
                              onClick={() => {
                                setSelectedImage(image.src);
                                sliderRef.current.slickGoTo(index);
                              }}
                              style={{
                                cursor: "pointer",
                                padding: "5px",
                                border:
                                  selectedImage === image.src
                                    ? "2px solid var(--primary)"
                                    : "none",
                              }}
                            >
                              <img
                                src={image.src} // Hiển thị đúng src của ảnh
                                alt={image.alt}
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
                <h1 className={cx("title")}>Products Name Here</h1>
                <h2 className={cx("price")}>$Price</h2>
                <div className={cx("description")}>
                  <div className={cx("stars")}>
                    {[...Array(totalStars)].map((_, index) => (
                      <span
                        key={index}
                        style={{
                          color: index < rating ? "gold" : "gray", // Đổi màu vàng nếu sao nằm trong "rating"
                          fontSize: "16px", // Kích thước sao
                        }}
                      >
                        ★
                      </span>
                    ))}
                    <span
                      style={{
                        marginLeft: "10px",
                        fontSize: "16px",
                        color: "black",
                      }}
                    >
                      {rating}/{totalStars}
                    </span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmoddll tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veni quis nostrud exercit
                    ullamco laboris nisi ut aliquip.
                  </p>
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
            <div className={cx("Reviews")}></div>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Product;
