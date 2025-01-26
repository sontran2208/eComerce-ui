import centerBanner from "../../assets/img/bg/hero-banner-shape.png";
import Pill from "../../components/Pill";
import imageService1 from "../../assets/img/others/services1.png";
import imageService2 from "../../assets/img/others/services2.png";
import imageService3 from "../../assets/img/others/services3.png";
import imageService4 from "../../assets/img/others/services4.png";
import mini1 from "../../assets/img/others/hero-mini-shape1.png";
import mini2 from "../../assets/img/others/hero-mini-shape2.png";
import mini3 from "../../assets/img/others/hero-mini-shape3.png";
import mini4 from "../../assets/img/others/hero-mini-shape4.png";
import mini5 from "../../assets/img/others/hero-mini-shape5.png";
import brand1 from "../../assets/img/others/brand1.png";
import brand2 from "../../assets/img/others/brand2.png";
import brand3 from "../../assets/img/others/brand3.png";
import brand4 from "../../assets/img/others/brand4.png";
import brand5 from "../../assets/img/others/brand5.png";
import ProductItem from "../../components/ProductItem";
import banner1 from "../../assets/img/bg/banner1.png";
import banner2 from "../../assets/img/bg/banner2.png";
import styles from "./Home.module.scss";
import SimpleSlider from "../../components/Slider";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { motion } from "framer-motion";
const cx = classNames.bind(styles);

function Home() {
  const products = [
    { id: 1, name: "Product 1", price: "$22.00", img: imageService1 },
    { id: 2, name: "Product 2", price: "$25.00", img: imageService2 },
    { id: 3, name: "Product 3", price: "$30.00", img: imageService3 },
    { id: 4, name: "Product 4", price: "$35.00", img: imageService4 },
    { id: 5, name: "Product 5", price: "$40.00", img: imageService1 },
    { id: 6, name: "Product 6", price: "$45.00", img: imageService2 },
    { id: 7, name: "Product 7", price: "$50.00", img: imageService3 },
    { id: 8, name: "Product 8", price: "$55.00", img: imageService4 },
  ];
  return (
    <div className={cx("wrapper")}>
      <Container fluid className={cx("banner")}>
        <Container>
          <Row>
            <Col lg={6} md={6} xs={12}>
              <div className={cx("inner")}>
                <div className={cx("sale-off")}>
                  <span
                    style={{
                      color: "var(--active)",
                      marginRight: "10px",
                      position: "relative",
                      top: "-2px",
                    }}
                  >
                    70%
                  </span>
                  <h3 style={{ fontSize: "30px" }}>Sale Off</h3>
                </div>
                <div className={cx("description")}>
                  <h1>Quality Products Bakery Items</h1>
                </div>
                <Pill to="shop" large />
              </div>
            </Col>
            <Col lg={6} md={6} xs={12} className="d-none d-md-block">
              <motion.div
                className={cx("banner-img")}
                animate={{
                  y: [0, -50, 0], // Di chuyển từ vị trí ban đầu, lên -50px, rồi trở về 0px
                }}
                transition={{
                  duration: 3, // Thời gian mỗi vòng lặp là 2 giây
                  repeat: Infinity, // Lặp lại vô hạn
                  repeatType: "loop", // Kiểu lặp lại (loop, reverse, mirror)
                  ease: "easeInOut",
                }}
              >
                <img alt="" src={centerBanner} />
              </motion.div>
            </Col>
          </Row>
        </Container>

        <div className={cx("mini1")}>
          <img alt="" src={mini1} />
        </div>
        <div className={cx("mini2")}>
          <img alt="" src={mini2} />
        </div>
        <div className={cx("mini3")}>
          <img alt="" src={mini3} />
        </div>
        <div className={cx("mini4")}>
          <img alt="" src={mini4} />
        </div>
        <div className={cx("mini5")}>
          <img alt="" src={mini5} />
        </div>
      </Container>

      <Container>
        <div className={cx("services")}>
          <Row>
            <Col lg={3}>
              <div className={cx("service")}>
                <img alt="" src={imageService1} />
                <Link>PASTRY</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </Col>
            <Col lg={3}>
              <div className={cx("service")}>
                <img alt="" src={imageService2} />
                <Link>BREAKFAST</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </Col>
            <Col lg={3}>
              <div className={cx("service")}>
                <img alt="" src={imageService3} />
                <Link>COFFEE CAKE</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </Col>
            <Col lg={3}>
              <div className={cx("service")}>
                <img alt="" src={imageService4} />
                <Link>BAKE TOSS</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <div className={cx("small-banner")}>
          <Row className="flex-column flex-lg-row">
            <Col lg={6}>
              <div className={cx("banner1")}>
                <img alt="" src={banner1} />
                <div className={cx("banner1-desc")}>
                  <h3>
                    <span
                      style={{ color: "var(--active)", marginRight: "10px" }}
                    >
                      70%
                    </span>
                    Sale Off
                  </h3>
                  <h2>Best Quality Products</h2>
                  <Pill to="shop" small />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className={cx("banner2")}>
                <img alt="" src={banner2} />
                <div className={cx("banner2-desc")}>
                  <h3>
                    <span
                      style={{ color: "var(--active)", marginRight: "10px" }}
                    >
                      70%
                    </span>
                    Sale Off
                  </h3>
                  <h2>Hot & Spicy Pastry</h2>
                  <Pill to="shop" small />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <div className={cx("product")}>
        <Container>
          <div className={cx("product-header")}>
            <h2>New Products</h2>
            <div className={cx("product-nav")}>
              <Link to="/shop">See More</Link>
            </div>
          </div>

          {/* <Container> */}
          <div className={cx("product-section")}>
            <Row>
              {products.map((product) => (
                <Col key={product.id} lg={3} md={4} sm={6}>
                  <ProductItem
                    name={product.name}
                    price={product.price}
                    image={product.img}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
        {/* </Container> */}
      </div>

      <Container fluid>
        <div className={cx("advertisment")}>
          <Row>
            <Col>
              <div className={cx("advertisment-desc")}>
                <h3>
                  <span style={{ color: "var(--active)", marginRight: "5px" }}>
                    45%
                  </span>{" "}
                  Sale Off
                </h3>
                <h2>Best Quality Products</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <Pill small />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className={cx("slider")}>
        <Container>
          <Row>
            <div className={cx("slider-header")}>
              <h2>Best Sellers</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
            </div>
          </Row>

          <Row>
            <SimpleSlider>
              {products.map((product) => (
                <Col key={product.id} lg={3} md={4} sm={6}>
                  <ProductItem
                    name={product.name}
                    price={product.price}
                    image={product.img}
                  />
                </Col>
              ))}
            </SimpleSlider>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col className={cx("brands")}>
            <Col className={cx("brand")}>
              {" "}
              <img alt="" src={brand1} />
            </Col>
            <Col className={cx("brand")}>
              {" "}
              <img alt="" src={brand2} />
            </Col>
            <Col className={cx("brand")}>
              {" "}
              <img alt="" src={brand3} />
            </Col>
            <Col className={cx("brand")}>
              {" "}
              <img alt="" src={brand4} />
            </Col>
            <Col className={cx("brand-last")}>
              {" "}
              <img alt="" src={brand5} />
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
