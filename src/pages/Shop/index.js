import classNames from "classnames/bind";
import styles from "./Shop.module.scss";
import Breadcrumb from "../../components/Breadcrumb";
import Filter from "../../components/Filter";
import { Container, Row, Col } from "react-bootstrap";
import imageService1 from "../../assets/img/others/services1.png";
import imageService2 from "../../assets/img/others/services2.png";
import imageService3 from "../../assets/img/others/services3.png";
import imageService4 from "../../assets/img/others/services4.png";
import ProductItem from "../../components/ProductItem";
import Pagination from "../../components/Pagination";

const cx = classNames.bind(styles);
function Shop() {
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
      <Breadcrumb page="Products" />
      <div className={cx("content")}>
        <Container>
          <Row>
            <Col lg={3}>
              <div className={cx("left")}>
                <div className={cx("filter")}>
                  <Filter />
                </div>
                <div className={cx("category")}></div>
                <div className={cx("Tags")}></div>
              </div>
            </Col>
            <Col lg={9}>
              <div className={cx("right")}>
                <div className={cx("product-count")}>
                  <p>12</p>
                  <h4>Product Found of</h4>
                  <p>30</p>
                </div>
                <Container className={cx("product")}>
                  <Row>
                    {products.map((product) => (
                      <Col lg={3} md={4} sm={6}>
                        <ProductItem
                          name={product.name}
                          price={product.price}
                          image={product.img}
                        />
                      </Col>
                    ))}
                  </Row>
                </Container>
                <Pagination
                  currentPage={1}
                  totalPages={3}
                  onPageChange={() => {}}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Shop;
