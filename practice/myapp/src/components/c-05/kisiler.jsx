import React from 'react';
import data from "../../assets/data/students.json";
import { Container, Row, Col } from 'react-bootstrap';
import Kisi from './Kisi'


const Tablo = () => {
  return (
    <Container>
      <Row className='d-flex gap-4 my-5'>
        {
          data.map((item, index) => (
            <Col key={index} xs="auto">
              <Kisi {...item} />
            </Col>
          ))
        }
      </Row>
    </Container>
  );
};

export default Tablo;
