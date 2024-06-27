import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Form2 = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");

    const handleSubmit = (e) => { 
        // 1- Formun default submit davranisi iptal edilir
        e.preventDefault();

        // 2- Form validasyon islemi yapilir
        if(!firstName){
            alert("Firstname is required");
            return;
        }

        // 3- (Backend'e gönderilecek obje) Payload olusturulur
        const payload = {
            firstName,
            lastName,
            phoneNumber,
            email,
            address
        }

        // 4- Payload API'a gonderilir.-> daha sonra yapılacak

        alert("Hello")
     }

	return (
		<Container className="mt-4">
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="firstName">
					<Form.Label>First Name</Form.Label>
					<Form.Control
						type="text"
						placeholder=""
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="lastName">
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						type="text"
						placeholder=""
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</Form.Group>

                <Form.Group className="mb-3" controlId="phoneNumber">
					<Form.Label>Phone Number</Form.Label>
					<Form.Control
						type="text"
						placeholder=""
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
					/>
				</Form.Group>

                <Form.Group className="mb-3" controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="text"
						placeholder=""
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Group>

                <Form.Group className="mb-3" controlId="address">
					<Form.Label>Address</Form.Label>
					<Form.Control
						as="textarea"
                        rows={5}
						placeholder=""
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					/>
				</Form.Group>

                <Button type="submit">Send</Button>
			</Form>
		</Container>
	);
};

export default Form2;