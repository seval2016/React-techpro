import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

/*
form2 controller'da herbir form elemanı için ayrı ayrı state yapılmıştı. Bu uygun bir kullanım değil.Eğer fazla 
sayıda form elemanı olursa hoş bir görüntü olmaz. Bu yüzden aşağıdaki yöntem kullanılır!
*/
const Form3 = () => {
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
		if (!formData.firstName) {
			alert("Firstname is required");
			return;
		}

		// 3- Payload olusturulur
		// Not: Burada artık form2 deki gibi ayrica bir payload olusturmaya gerek yok. Cunku formData state i bir payload formunda
		
		
		
		//  4-Payload API'a gonderilir.

		alert("Hello");
	};

	return (
		<Container className="mt-4">
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="firstName">
					<Form.Label>First Name</Form.Label>
					<Form.Control
						type="text"
						placeholder=""
						value={formData.firstName}
						onChange={(e) =>
							setFormData({
								...formData,
								firstName: e.target.value,
							})
						}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="lastName">
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						type="text"
						placeholder=""
						value={formData.lastName}
						onChange={(e) =>
							setFormData({
								...formData,
								lastName: e.target.value,
							})
						}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="phoneNumber">
					<Form.Label>Phone Number</Form.Label>
					<Form.Control
						type="text"
						placeholder=""
						value={formData.phoneNumber}
						onChange={(e) =>
							setFormData({
								...formData,
								phoneNumber: e.target.value,
							})
						}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="text"
						placeholder=""
						value={formData.email}
						onChange={(e) =>
							setFormData({
								...formData,
								email: e.target.value,
							})
						}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="address">
					<Form.Label>Address</Form.Label>
					<Form.Control
						as="textarea"
						rows={5}
						placeholder=""
						value={formData.address}
						onChange={(e) =>
							setFormData({
								...formData,
								address: e.target.value,
							})
						}
					/>
				</Form.Group>

				<Button type="submit">Send</Button>
			</Form>
		</Container>
	);
};

export default Form3;