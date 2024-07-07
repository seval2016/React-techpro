import React from 'react'
import Card from 'react-bootstrap/Card';

const Kisi = ({isim,yas,kurs,img}) => {
    //parantez içerisine props yazarsak props.isim ,props.yas vs diye çağırabiliriz
    //parantez içerisine item yazarsak 
    //const{isim,yas,kurs,img}=item şeklinde çağrılır
    
  return (

      <Card style={{ width: "18rem"}} className='my-2'>
        <Card.Img variant="top" src={img} style={{height:"300px"}} alt="card-image"/>
        <Card.Body>
          <Card.Title>{kurs}</Card.Title>
      
        </Card.Body>
        <Card.Body>
          <Card.Text>{isim} / Yaş : {yas}</Card.Text>

        </Card.Body>
      </Card>
  );
}

export default Kisi