import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Product from "./products";

const ProductStore = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="my-5">Produt Store</h2>
      {loading && (
        <div className="text-center">
          <Spinner variant="warning" />
        </div>
      )}
      <Row xs={1} sm={2} md={3} lg={4} className="g-3">
        {products.map((item) => (
          <Col key={item.id}>
            <Product {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductStore;
