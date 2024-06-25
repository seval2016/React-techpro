import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Form4 = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		phoneNumber: "",
		email: "",
		address: "",
	});

	console.log(formData);

	const handleSubmit = (e) => {
		// 1- Formun default submit davranisi iptal edilir
		e.preventDefault();

		// 2- Form validasyon islemi yapilir
		if (!firstName) {
			alert("Firstname is required");
			return;
		}

		// 3- Payload olusturulur
		// Ayrica bir payload olusturmaya gerek yok. Cunku formData state i bir payload formunda

		// 4- Payload API'a gonderilir.

		alert("Hello");
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData({
			...formData,
			[name]: value,
		});
	};

	return (
		<Container className="mt-4">
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="firstName">
					<Form.Label>First Name</Form.Label>
					<Form.Control
						name="firstName"
						type="text"
						placeholder=""
						value={formData.firstName}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="lastName">
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						name="lastName"
						type="text"
						placeholder=""
						value={formData.lastName}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="phoneNumber">
					<Form.Label>Phone Number</Form.Label>
					<Form.Control
						name="phoneNumber"
						type="text"
						placeholder=""
						value={formData.phoneNumber}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						name="email"
						type="text"
						placeholder=""
						value={formData.email}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="address">
					<Form.Label>Address</Form.Label>
					<Form.Control
						name="address"
						as="textarea"
						rows={5}
						placeholder=""
						value={formData.address}
						onChange={handleChange}
					/>
				</Form.Group>

				<Button type="submit">Send</Button>
			</Form>
		</Container>
	);
};

export default Form4;