import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import * as Yup from "yup";

const Form6 = () => {
	const initialValues = {
		firstName: "",
		lastName: "",
		phoneNumber: "",
		email: "",
	};

	const validationSchema = Yup.object({
		firstName: Yup.string()
			.min(2, "Min 2 chars")
			.max(15, "Max 15 chars")
			.required("Required"),
		lastName: Yup.string().required("Required"),
		email: Yup.string().email("Invalid email").required("Required"),
	});

	const onSubmit = (values) => {
		setTimeout(() => {
			alert("Form was submitted");
			formik.resetForm();
		}, 2000);
	};

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit,
	});

	const isInvalid = (field) => {
		const res = formik.touched[field] && !!formik.errors[field];
		return res;
	};

	const isValid = (field) => {
		const res = formik.touched[field] && !formik.errors[field];
		return res;
	};

	return (
		<Container className="mt-4">
			<Form onSubmit={formik.handleSubmit} noValidate>
				<Form.Group className="mb-3" controlId="firstName">
					<Form.Label>First Name</Form.Label>
					<Form.Control
						name="firstName"
						type="text"
						placeholder=""
						value={formik.values.firstName}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						isInvalid={isInvalid("firstName")}
						isValid={isValid("firstName")}
					/>
					<Form.Control.Feedback type="invalid">
						{formik.errors.firstName}
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="lastName">
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						name="lastName"
						type="text"
						placeholder=""
						value={formik.values.lastName}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						isInvalid={isInvalid("lastName")}
						isValid={isValid("lastName")}
					/>
					<Form.Control.Feedback type="invalid">
						{formik.errors.lastName}
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="phoneNumber">
					<Form.Label>Phone Number</Form.Label>
					<Form.Control
						name="phoneNumber"
						type="text"
						placeholder=""
						value={formik.values.phoneNumber}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						isInvalid={isInvalid("phoneNumber")}
						isValid={isValid("phoneNumber")}
					/>
					<Form.Control.Feedback type="invalid">
						{formik.errors.phoneNumber}
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						name="email"
						required
						type="text"
						placeholder=""
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						isInvalid={isInvalid("email")}
						isValid={isValid("email")}
					/>
					<Form.Control.Feedback type="invalid">
						{formik.errors.email}
					</Form.Control.Feedback>
				</Form.Group>

				<Button
					type="submit"
					disabled={
						formik.isSubmitting || !(formik.dirty && formik.isValid)
					}
				>
					{formik.isSubmitting ? <Spinner size="sm" /> : "Send"}
				</Button>
			</Form>
		</Container>
	);
};

export default Form6;