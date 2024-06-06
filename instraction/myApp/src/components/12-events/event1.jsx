import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Event1 = () => {


    const handleClick = () => { 
        alert("Hello")
    }

    // Event listener lara handler atanirken - onClick={sayHello} - şeklinde olur
    // - onClick={sayHello()} -  buradaki gibi parantez kullanilmaz  
    // kullanilirsa fonksiyon hemen cagrirır

  return (
    <Container className="mt-5">
        <Button variant="info" onClick={handleClick}>Say Hello</Button>
    </Container>
  )
}

export default Event1