import React from "react";
import { useFormik } from "formik";
import {
  Alert,
  Button,
  Card,
  FloatingLabel,
  Form,
  Spinner,
} from "react-bootstrap";
import * as Yup from "yup";
/*import { getProduct, updateProduct } from "./api";*/

const newProductForm = () => {
  //Formik oluşturma

  //1.Aşama : initial state
  const initialValues = {
    title: "",
    price: "",
    category: "",
    discounted: false,
  };
  //2.Aşama validationScheama

  const validationSchema = Yup.object({
    title: Yup.string().max(50, "Too long").required("Required"),
    price: Yup.number()
      .typeError("Invalid")
      .min(0, "Cannot be negative")
      .required("Required"),
    category: Yup.string().max(70, "Too long").required("Required"),
  });

  const onSubmit = (values) => {
    //console.log(values);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  /*
    Not1: onSubmit={formik.handleSubmit} ile submit butonuna basıldıgında formda girilen verileri alacak
     validationSchema da kontrolünü yapıp bize tepki verecek.

    Not: Formik'de birşeyler yaparken form elemanlarında kullanmamız gereken 3 tane zorunlu yapı vardır 
     1. name
     2. value
     3. onChange

     {...formik.getFieldProps("title")} ile bu yapıları oluşturabiliriz. Form alanlarına göre "title" değişir
     */
  const isInvalid = (field) => {
    const res = formik.touched[field] && !!formik.errors[field];
    return res;
  };
  return (
    <Card>
      <Card.Body>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <FloatingLabel controlId="title" label="Title" className="mb-3">
            <Form.Control
              type="text"
              placeholder=""
              {...formik.getFieldProps("title")}
              isInvalid={isInvalid("title")}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.title}
            </Form.Control.Feedback>
          </FloatingLabel>

          <FloatingLabel controlId="price" label="Price" className="mb-3">
            <Form.Control
              type="number"
              placeholder=""
              {...formik.getFieldProps("price")}
              isInvalid={isInvalid("price")}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.price}
            </Form.Control.Feedback>
          </FloatingLabel>

          <FloatingLabel controlId="category" label="Category" className="mb-3">
            <Form.Select
              aria-label="Select Category"
              {...formik.getFieldProps("category")}
              isInvalid={isInvalid("category")}
            >
              <option>Select</option>
              <option value="computer">Computer</option>
              <option value="monitor">Monitor</option>
              <option value="keyboard">Keyboard</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {formik.errors.category}
            </Form.Control.Feedback>
          </FloatingLabel>

          <Form.Check
            type="checkbox"
            id="discounted"
            label="Discounted"
            className="mb-3"
            {...formik.getFieldProps("discounted")}
          />
          <Button type="submit">Create</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default newProductForm;
