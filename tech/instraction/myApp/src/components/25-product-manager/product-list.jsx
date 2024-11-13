import React, { useEffect, useState } from "react";
import { Alert, Button, Spinner, Table } from "react-bootstrap";
import { deleteProduct, getAllProducts } from "./api";
import { FaTrash, FaCheck, FaMinus, FaEdit, FaPlus } from "react-icons/fa";

const ProductList = ({ setOperation, setCurrentProductId }) => {
	const [products, setProducts] = useState([]);//backend den gelen product'ı saklayacak state ve başlangıç olarak boş bir dizi verilecek
	const [loading, setLoading] = useState(true);//loading işlemini göstereceğimiz state
	const [error, setError] = useState(null); //backend'e bağlanacağımız için error state
	const [refreshList, setRefreshList] = useState(null);//

	useEffect(() => { //ilk çalışmaya başladığında tüm ürünleri getirmemiz gerekli
		const loadProducts = async () => {
			try {
				const data = await getAllProducts();
				setProducts(data);
			} catch (err) {
				console.log(err);
				setError(err);
			} finally { //loading durdurmak için
				setLoading(false);
			}
		};

		loadProducts();
	}, [refreshList]);

	const loadingMessage = loading ? (
		<tr>
			<td colSpan={5} className="text-center">
				<Spinner />
			</td>
		</tr>
	) : null;

	const errorMessage = error?.message ? (
		<tr>
			<td colSpan={5} className="text-center">
				<Alert variant="danger">{error?.message}</Alert>
			</td>
		</tr>
	) : null;

	const noRecordMessage =
		products.length <= 0 ? (
			<tr>
				<td colSpan={5} className="text-center">
					No product found
				</td>
			</tr>
		) : null;

	const removeProduct = async (id) => {
		if (!id) return;
		const res = confirm("Are you sure to delete?");
		if (!res) return;

		try {
			await deleteProduct(id);
			setRefreshList(Math.random());
		} catch (err) {
			console.log(err);
			setError(err);
		}
	};

	const handleEdit = (id) => {
		setCurrentProductId(id);
		setOperation("edit");
	};

	return (
		<>
			<Button className="mb-3" onClick={() => setOperation("new")}>
				<FaPlus /> New Product
			</Button>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Title</th>
						<th>Price</th>
						<th>Discounted</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{loadingMessage}

					{errorMessage}

					{noRecordMessage}

					{products.map((item, index) => (
						<tr key={item.id}>
							<td>{index + 1}</td>
							<td>{item.title}</td>
							<td>${item.price}</td>
							<td>
								{item.discounted ? <FaCheck /> : <FaMinus />}
							</td>
							<td>
								<Button
									variant="link"
									onClick={() => handleEdit(item.id)}
								>
									<FaEdit />
								</Button>
								<Button
									variant="link"
									onClick={() => removeProduct(item.id)}
								>
									<FaTrash />
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
};

export default ProductList;