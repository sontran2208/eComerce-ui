import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import { useState } from "react"; // Sửa lỗi import
import imageService1 from "../../assets/img/others/services1.png";
import imageService2 from "../../assets/img/others/services2.png";
import imageService3 from "../../assets/img/others/services3.png";
import imageService4 from "../../assets/img/others/services4.png";

const cx = classNames.bind(styles);

function Product() {
  const images = [
    { id: 1, src: imageService1, alt: "Service 1" },
    { id: 2, src: imageService2, alt: "Service 2" },
    { id: 3, src: imageService3, alt: "Service 3" },
    { id: 4, src: imageService4, alt: "Service 4" },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0].src); // Sửa state để nhận src

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: true,
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <Container>
          <Row>
            <Col md={6}>
              <div className={cx("left")}>
                <Container>
                  <Row>
                    <Col md={8}>
                      <div className={cx("image")}>
                        <img src={selectedImage} alt="Selected" />
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className={cx("slider")}>
                        <Slider {...sliderSettings}>
                          {images.map((image, index) => (
                            <div
                              key={index}
                              onClick={() => setSelectedImage(image.src)} // Chỉ lấy src của ảnh
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
              <div className={cx("right")}></div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Product;
