import classNames from "classnames/bind";
import styles from "./Shop.module.scss";
import Breadcrumb from "../../components/Breadcrumb";
import Filter from "../../components/Filter";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import ProductItem from "../../components/ProductItem";
import Pagination from "../../components/Pagination";

const cx = classNames.bind(styles);
function Shop() {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({ cateId: null, price: [0, 400000] });
  const [selectedCate, setSelectedCate] = useState(null);
  const limit = 8;
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const categoryId = queryParams.get("category");
    setSelectedCate(categoryId ? parseInt(categoryId) : null);
    setFilters((prev) => ({
      ...prev,
      cateId: categoryId ? parseInt(categoryId) : null,
    }));
  }, [location.search]);

  useEffect(() => {
    fetchProducts(page, filters);
  }, [page, filters]);

  useEffect(() => {
    const fetchCate = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/v1/categories"
        );
        setCategories([{ id: null, title: "All" }, ...response.data]);
      } catch (error) {
        console.error("Lỗi khi lấy danh mục:", error);
      }
    };
    fetchCate();
  }, []);

  const fetchProducts = async (page, filters) => {
    try {
      const params = {
        page,
        limit,
        minPrice: filters.price[0],
        maxPrice: filters.price[1],
      };

      if (filters.cateId !== null) {
        params.category = filters.cateId;
      }

      const response = await axios.get(
        "http://localhost:3001/api/v1/products/with-filters",
        { params }
      );

      setProducts(response.data.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Lỗi khi lấy sản phẩm:", error);
    }
  };

  // Cập nhật filters khi người dùng chọn bộ lọc mới
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setPage(1);
  };

  // Xử lý khi người dùng chuyển trang
  const handlePageClick = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <div className={cx("wrapper")}>
      <Breadcrumb page="Products" />
      <div className={cx("content")}>
        <Container>
          <Row>
            {/* Sidebar bộ lọc */}
            <Col lg={3}>
              <div className={cx("left")}>
                <div className={cx("filter")}>
                  <Filter
                    selectedCate={selectedCate}
                    categories={categories}
                    onFilterChange={handleFilterChange}
                  />
                </div>
              </div>
            </Col>

            {/* Danh sách sản phẩm */}
            <Col lg={9}>
              <div className={cx("right")}>
                <div className={cx("product-count")}>
                  <p>{products.length}</p>
                  <h4>Product Found</h4>
                  <p>{totalPages * limit}</p>
                </div>

                <Container className={cx("product")}>
                  <Row>
                    {products.map((product) => (
                      <Col key={product.id} lg={3} md={4} sm={6}>
                        <ProductItem
                          name={product.title}
                          price={product.price}
                          image={
                            "http://localhost:3001/" +
                            (product.images[0]?.filepath || "default.jpg")
                          }
                          id={product.id}
                          to={`/product/${product.id}`}
                        />
                      </Col>
                    ))}
                  </Row>
                </Container>

                {/* Pagination */}
                <Pagination
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={handlePageClick}
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
