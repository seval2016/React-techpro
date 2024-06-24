import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "./product";

const ProductStore1 = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const res = await fetch("https://dummyjson.com/products");
			const data = await res.json();
			setProducts(data.products);
		};

		fetchProducts();
	}, []);

	return (
		<Container className="mt-4">
			<h2>Produt Store</h2>

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

export default ProductStore1;