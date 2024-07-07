import React from "react";
import { Card, Button } from "react-bootstrap";

const Kisi = ({ isim, yas, kurs, img }) => {
  //parantez içerisine props yazarsak props.isim ,props.yas vs diye çağırabiliriz
  //parantez içerisine item yazarsak
  //const{isim,yas,kurs,img}=item şeklinde çağrılır

  return (
    <Card style={{ width: "18rem" }} className="my-3">
      <Card.Img
        variant="top"
        src={img}
        style={{ height: "300px" }}
        alt="card-image"
      />
      <Card.Body>
        <Card.Title>{kurs}</Card.Title>
        <Card.Text>
          {isim} / Yaş : {yas}
        </Card.Text>
        <Button className="btn-sm" variant="primary">
          Detail
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Kisi;
