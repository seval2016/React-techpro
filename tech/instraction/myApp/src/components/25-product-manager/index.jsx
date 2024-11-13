import React, { useState } from "react";
import NewProductForm from "./new-product-form";
import ProductList from "./product-list";
import { Button, Container } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import EditProductForm from "./edit-product-form";

const ProductManager = () => {
	const [operation, setOperation] = useState("list"); // list, edit, new,
  //opertaion state durumuna göre list, edit, new görüntülenmesini ayarlayacağız
	const [currentProductId, setCurrentProductId] = useState(null);

	return (
		<Container className="mt-4">
			{operation === "list" ? (
				<ProductList
					setOperation={setOperation}
					setCurrentProductId={setCurrentProductId}
				/>
			) : operation === "edit" ? (
				<EditProductForm
					setOperation={setOperation}
					currentProductId={currentProductId}
				/>
			) : (
				<NewProductForm setOperation={setOperation} />
			)}
		</Container>
	);
};

export default ProductManager;